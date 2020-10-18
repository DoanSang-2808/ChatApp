const model = {}
model.currentUser ={}
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
model.addMessageToFirebase = (messageSend) => {
    let date = new Date();
    console.log(date)
    const data = {
        content : messageSend.content,
        createAt : date.toISOString(),
        owner : messageSend.owner,

    }
    console.log(data.createAt)
    const dataUpdate = {
        messages : firebase.firestore.FieldValue.arrayUnion(data)
    }
const docId = 'L4rIfkSC7Ty69wLtfa7H'
firebase.firestore().collection('conversations').doc(docId).update(dataUpdate)
}