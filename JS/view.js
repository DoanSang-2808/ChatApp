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
                // event.stopPropagation();
                const dataLogin = {
                    email: loginForm.Email.value,
                    password: loginForm.Password.value,
                }
                console.log(dataLogin)
                controller.login(dataLogin);
            })
            break;
        case 'chatMain':
            document.getElementById('app').innerHTML = conponent.chatMain;
            const sendMessageForm = document.getElementById('send-message-form')
            console.log(sendMessageForm)
            sendMessageForm.addEventListener('submit', (event) => {
                event.preventDefault();
                const message = sendMessageForm.message.value;
                console.log(message)
                const messageSend = {
                    owner: model.currentUser.email,
                    content: message,
                }
                const messageReply = {
                    onwer: 'Nguyen Y Van',
                    content: message,
                }
                if (message.trim !== "") {
                    view.addMessage(messageSend);
                    model.addMessageToFirebase(messageSend)
                    view.addMessage(messageReply);
                    sendMessageForm.message.value = "";
                }
            })
            break;
    }
}

view.setErrorMassage = (elementId, massage) => {
    document.getElementById(elementId).innerText = massage
}
view.addMessage = (message) => {
    const messageWrapper = document.createElement('div')
    messageWrapper.classList.add('message');
    if (model.currentUser.email == message.owner) {
        messageWrapper.classList.add('message-mine')
        messageWrapper.innerHTML = `<div class='message-content'>${message.content}</div>`
    } else {
        messageWrapper.classList.add('message-other')
        messageWrapper.innerHTML = `<div class='name'> Nguyen Y Van</div>
                                   <div class='message-content'>${message.content}</div>`


    }
    document.querySelector('.list-message').appendChild(messageWrapper);


}

