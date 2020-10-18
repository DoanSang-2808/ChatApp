window.onload = () => { // gan cho su kien window.onload 1 function
    var firebaseConfig = {
        apiKey: "AIzaSyCk2y8fpiKsAF--harzPOs8ybgyaBoq0ys",
        authDomain: "chatapp-a4f78.firebaseapp.com",
        databaseURL: "https://chatapp-a4f78.firebaseio.com",
        projectId: "chatapp-a4f78",
        storageBucket: "chatapp-a4f78.appspot.com",
        messagingSenderId: "134108699998",
        appId: "1:134108699998:web:c852f08f3fa47e785d83cf"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    console.log(firebase.app().name);
    firebase.auth().onAuthStateChanged((res) => {
        if(res) {
            if(res.emailVerified){
                model.currentUser = {
                    displayName : res.displayName,
                    email : res.email,
                }
                console.log(model.currentUser)
                view.setActiveScreen('chatMain');
            }else {
                view.setActiveScreen('loginPage')
                alert('Please verify your email')
            }
        }else {
            view.setActiveScreen('registerPage')
        }
    })
    //firestoreQuerise();
}


// firestoreQuerise =  async() => {
//     //get one 
//     const respon = await firebase.firestore().collection('users').doc('i0rRXoi6b1NyYDEwNAvA').get();
//     const user = getDataFromDoc(respon)
//     console.log(user)
//     //get many
//     const respon = await firebase.firestore().collection('users').where('phone','array-contains', '03245').get()
//     const listUser = getDataFromDocs(respon.docs)
//     console.log(listUser)
//     //add
//     const dataToAdd = {
//         name:"Nguyen van A",
//         age  : 10
//     }
//     firebase.firestore().collection("users").add(dataToAdd);
    
//     //update
//     const dataToUpdate = {
//         name: 'xyxzzz',
//         address : "hai p",
//         address : firebase.firestore.FieldValue.delete(),
//         phone : firebase.firestore.FieldValue.arrayUnion('1234567')
//     }
//     const docID = "aBkX6kNhmE1Boxs71to6"
//     firebase.firestore().collection('users').doc(docID).update(dataToUpdate)
//     //delete
//     const docID = "aBkX6kNhmE1Boxs71to6"
//     firebase.firestore().collection('Users').doc('docId').delete;
// }
// getDataFromDoc = (res) => {
//     const data = res.data()
//     data.id = res.id
//     return data
// }
// getDataFromDocs = (docs) => {
//     // const arr = []
//     // for( const oneDoc of docs){
//     //     arr.push(getDataFromDoc(oneDoc))
//     // }
//     //return arr
//     return docs.map(getDataFromDoc)
//}