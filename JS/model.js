const model = {}
model.currentUser = {}
model.Conversations = [];
model.currentConversation = {}
model.register = async ({ firstName, lastName, email, password }) => {
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)

        // update profile
        firebase.auth().currentUser.updateProfile({
            displayName: firstName + " " + lastName
        })

        //gui email verify
        firebase.auth().currentUser.sendEmailVerification()
        alert('Successful register!!!')
        view.setActiveScreen('loginPage')
    } catch (err) {
        console.log(err);
        alert(err.message)
    }

}
model.login = async ({ email, password }) => {
    try {
        const res = await firebase.auth().signInWithEmailAndPassword(email, password)
        // console.log(response)
        // if (response.user.emailVerified) {
        //   view.setActiveScreen('chatMain')
        // } else {
        //   alert('Please verify email')
        // }
    } catch (err) {
        alert(err.message)
    }
}
model.addMessageToFirebase = (message) => {
    // console.log(data.createAt)
    const dataUpdate = {
        messages: firebase.firestore.FieldValue.arrayUnion(message)
    }
    const docId = model.currentConversation.id
    firebase.firestore().collection('conversations').doc(docId).update(dataUpdate)
}
model.getConversations = async () => {
    const respon = await firebase.firestore().collection('conversations').where('users', 'array-contains', model.currentUser.email).get()
    model.Conversations = getDataFromDocs(respon.docs)
    if (model.Conversations.length > 0) {
        model.currentConversation = model.Conversations[0]
        view.showCurrentConversation()
        view.showListConversation()

    }

}
model.ListenConversationChange = () => {
    let isFirstRun = true
    firebase.firestore().collection('conversations').where('users', 'array-contains', model.currentUser.email).onSnapshot((snapshot) => {
        if (isFirstRun) {
            isFirstRun = false
            return
        }
        let docChange = snapshot.docChanges()
        for (const el of docChange) {
            if (el.type === 'modified') {
                const dataChange = getDataFromDoc(el.doc)
                for (let i = 0; i < model.Conversations.length; i++) {
                    if (model.Conversations[i].id === dataChange.id) {
                        model.Conversations[i] = dataChange
                    }
                }
                if (dataChange.id = model.currentConversation.id) {
                    model.currentConversation = dataChange
                    view.addMessage(model.currentConversation.messages[model.currentConversation.messages.length - 1])
                    view.ScrollToElement()
                }
               
            } 
            else if(el.type === 'added'){
                const dataChange = getDataFromDoc(el.doc)
                console.log(dataChange)
                model.Conversations.push(dataChange)
                view.addConversation(dataChange);
            }
        }

    })
}
model.createConversation = (conversation)  => {
    // const createConversation = {
    //     conversations : firebase.firestore.FieldValue.arrayUnion(conversation)
    // }
    // const docId = model.currentConversation.id
    // firebase.firestore().collection('conversations').doc(docId).update(dataUpdate)
    firebase.firestore().collection("conversations").add(conversation);
    view.setActiveScreen('chatMain', true)
}
model.addUser = (email) =>{
    const userNew = {
        users : firebase.firestore.FieldValue.arrayUnion(email),
    }
    const docId = model.currentConversation.id
    firebase.firestore().collection('conversations').doc(docId).update(userNew)
    view.addUsersInConversation(email)
}