const controller = {}
controller.register = ({ firstName, lastName, email, password, cfPassword }) => {
    if (firstName === '') {
        view.setErrorMassage('first-name-error', "Please input first name")
    } else {
        view.setErrorMassage('first-name-error', "")
    }
    if (lastName === '') {
        view.setErrorMassage('last-name-error', "Please input last name")
    } else {
        view.setErrorMassage('last-name-error', "")
    }
    if (email === '') {
        view.setErrorMassage('email-error', "Please input email")
    }
    else {
        view.setErrorMassage('email-error', "")
    }
    if (password === '') {
        view.setErrorMassage('Password-error', "Please input password")
    }
    else {
        view.setErrorMassage('Password-error', "")
    }
    if (cfPassword === '') {
        view.setErrorMassage('confirm-password-error', "Please input confirmPassword")
    }
    else if (password !== cfPassword) {
        view.setErrorMassage('confirm-password-error', "Please did't match")
    }
    else {
        view.setErrorMassage('confirm-password-error', "")
    }
    if (firstName != '' && lastName !== '' && email !== '' && password !== '' && password !== '' && cfPassword !== '' && cfPassword === password) {
        const dataRegister = { firstName, lastName, email, password, cfPassword }
        model.register(dataRegister)

    }

}
controller.login = ({ email, password }) => {
    if (email === '') {
        view.setErrorMassage('email-error', 'Please input email');
    } else {
        view.setErrorMassage('email-error', '')
    } if (password === '') {
        view.setErrorMassage('password-error', 'Please input password');
    } else {
        view.setErrorMassage('password-error', '');
    }
    if (email !== '' && password !== '') {
        const dataLogin = { email, password }
        model.login(dataLogin);
    }
}

controller.createConversation = ({email,title}) => {
    if(email === ''){
        view.setErrorMassage("conversation-email-error", "Please input email")
    }else if(!validateEmail(email) ){
        view.setErrorMassage("conversation-email-error", "Invalidate Email")
    }
    else {
        view.setErrorMassage("conversation-email-error", "")
    }
    // const messagesTitle = title === '' ? 'Please input email' : ''
    // view.setErrorMassage("conversation-email-error", messagesTitle)
    if(email !== '' && validateEmail(email) && title !== ''){
        const conversation = {
            Title : title,
            createAt : new Date().toISOString(),
            messages : [],
            users : [model.currentUser.email, email]
        }
        model.createConversation(conversation);
    }
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
 controller.addUser  = (email) =>{
     if(email === ''){
        view.setErrorMassage("user-error", "Please input email")
     }else if(!validateEmail(email) ){
        view.setErrorMassage("user-error", "Invalidate Email")
    }
    else {
        view.setErrorMassage("user-error", "")
    }
    if(email !== '' && validateEmail(email)){
        model.addUser(email);
    }
}
