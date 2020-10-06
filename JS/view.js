const view = {}
view.setActiveScreen = (screenName) => {
    switch (screenName) {
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
                    firstName: registerForm.firstName.value,
                    lastName: registerForm.lastName.value,
                    email: registerForm.Email.value,
                    password: registerForm.Password.value,
                    cfPassword: registerForm.confirmPassword.value

                }
                console.log(dataRegister)
                controller.register(dataRegister)

            })

            break;
        case 'loginPage':
            document.getElementById('app').innerHTML = conponent.loginPage;
            document.getElementById('login-register').addEventListener('click', () => {
                view.setActiveScreen('registerPage')
            })
            const loginForm = document.getElementById('form-login')
            loginForm.addEventListener('submit', (event) => {
                event.preventDefault();
                event.stopPropagation();
                const dataLogin = {
                    email: loginForm.Email.value,
                    password: loginForm.Password.value,
                }
                console.log(dataLogin)
                controller.login(dataLogin);
            })
            break;
    }
}

view.setErrorMassage = (elementId, massage) => {
    document.getElementById(elementId).innerText = massage
}

