const view = {}
view.setActiveScreen = (screenName) => {
    switch(screenName){
        case 'registerPage':
            document.getElementById('app').innerHTML = conponent.registerPage;
            document.getElementById('redirect-login').addEventListener('click', () => {
                view.setActiveScreen('loginPage')
            })
            const registerForm = document.getElementById('form-register')
            registerForm.addEventListener('submit', (event) => {
                console.log(event);
                event.preventDefault();
                const dataRegister = {
                    firstName : registerForm.firstName.value,
                    lastName : registerForm.lastName.value,
                    email : registerForm.Email.value,
                    password : registerForm.Password.value,
                    cfPassword : registerForm.confirmPassword.value
                
                }
                console.log(dataRegister)
                controller.register(dataRegister)

            })
            
        break;
        case 'loginPage' :
            document.getElementById('app').innerHTML = conponent.loginPage;
            document.getElementById('login-register').addEventListener('click', () => {
                view.setActiveScreen('registerPage')
            })
        break;
    }
}

view.setErrorMassage = (elementId,massage) => {
    document.getElementById(elementId).innerText = massage
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
