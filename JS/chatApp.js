window.onload = () => { // gan cho su kien window.onload 1 function
    view.setActiveScreen('registerPage');
    //document.getElementById('app').innerHTML = conponent.welComPage
    document.getElementById('redirect-login').onclick = () => {
            // view.setActiveScreen('loginPage');
            // document.getElementById('login-register').onclick = () => {
            //     view.setActiveScreen('registerPage');
            //     document.getElementById('redirect-login').onclick = () => {
            //         view.setActiveScreen('loginPage');
            //     }
            // }
        Login();
    }
}
const Login = () => {
    view.setActiveScreen('loginPage')
    document.getElementById('login-register').onclick = () => {
    Register();
    }
}
const Register = () => {
    view.setActiveScreen('registerPage')
    document.getElementById('redirect-login').onclick = () => {
    Login()
    }
}


