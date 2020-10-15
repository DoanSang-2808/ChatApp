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
    //document.getElementById('app').innerHTML = conponent.welComPage
    //document.getElementById('redirect-login').onclick = () => {
            // view.setActiveScreen('loginPage');
            // document.getElementById('login-register').onclick = () => {
            //     view.setActiveScreen('registerPage');
            //     document.getElementById('redirect-login').onclick = () => {
            //         view.setActiveScreen('loginPage');
            //     }
            // }
        //Login();
    //}
}
// const Login = () => {
//     view.setActiveScreen('loginPage')
//     document.getElementById('login-register').onclick = () => {
//     Register();
//     }
// }
// const Register = () => {
//     view.setActiveScreen('registerPage')
//     document.getElementById('redirect-login').onclick = () => {
//     Login()
//     }
// }


