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
                    createAt: new Date().toISOString()
                }
                // const messageReply = {
                //     onwer: 'Nguyen Y Van',
                //     content: message,
                // }
                if (message.trim !== "") {
                    //view.addMessage(messageSend);
                    model.addMessageToFirebase(messageSend)
                    //view.addMessage(messageReply);
                    sendMessageForm.message.value = "";
                }
            })
            //lay các cuoc hoi thoai ve
            model.getConversations()
            //lang nghe thay doi cua cac cuoc hoi thoai
            model.ListenConversationChange()

            const createChat = document.querySelector('#createChat')
            createChat.addEventListener('click', () => {
                view.setActiveScreen('CreateChat')
            })
            break;
        case 'CreateChat' :
            document.getElementById('app').innerHTML = conponent.CreateChat;
            const cancer = document.querySelector('.btn-cancer');
            // cancer.addEventListener('click', () => {
            //     view.setActiveScreen('chatMain')
            // })
            const createChats = document.getElementById('create');
            createChats.addEventListener('submit', (event) => {
                event.preventDefault(); 
                const conversationNew = {
                    conversationName : createChats.conversationName.value,
                    friendEmail : createChats.friendEmail.value,
                } 
                const conversation = {
                    Title : conversationNew.conversationName,
                    createAt : new Date().toISOString(),
                    messages : [],
                    users : [model.currentUser.email, conversationNew.friendEmail]
                }
                model.createConversation(conversation);
                
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
        messageWrapper.innerHTML = `
        <div class='message-content' >${message.content}</div>
                                    `

    } else {
        messageWrapper.classList.add('message-other')
        messageWrapper.innerHTML = `<div class='name'>${message.owner} </div>
                                   <div class='message-content'>${message.content}</div>`


    }
    document.querySelector('.list-message').appendChild(messageWrapper);


}
view.showCurrentConversation = () => {
    document.querySelector('.list-message').innerHTML = ''
    // console.log(model.currentConversation)
    document.querySelector('.conversation-title').textContent = model.currentConversation.Title
    for (const el of model.currentConversation.messages) {
        view.addMessage(el)
        view.ScrollToElement();
    }
}
view.showListConversation = () => {
    console.log(model.Conversations)
    for (const el of model.Conversations) {
        view.addConversation(el)
        

    }
}
view.addConversation = (conversation) => {
    const conversationWrapper = document.createElement('div');
    conversationWrapper.classList.add("conversation");
    if (conversation.id === model.currentConversation.id) {
        conversationWrapper.classList.add("current");
    }
    conversationWrapper.innerHTML = `<div class="left-conversation">${conversation.Title}</div>
    <div class="number-user">${conversation.users.length} users</div>`

    document.querySelector('.list-conversation').appendChild(conversationWrapper);
    conversationWrapper.addEventListener("click", () => {
        const current= document.querySelector('.current')
        current.classList.remove("current");
        conversationWrapper.classList.add('current');
        for(const conver of model.Conversations){
            if(conversation.id === conver.id){
                model.currentConversation = conver;
                view.showCurrentConversation()
            }
        }
    })
}
view.ScrollToElement = () => {
    const elm = document.querySelector('.list-message');
    elm.scrollTop = elm.scrollHeight
}



