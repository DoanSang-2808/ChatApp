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
    else  {
        view.setErrorMassage('email-error', "")
    }
    if (password === '') {
        view.setErrorMassage('Password-error', "Please input password")
    }
    else  {
        view.setErrorMassage('Password-error', "")
    }
    if (cfPassword === '') {
        view.setErrorMassage('confirm-password-error', "Please input confirmPassword")
    }
    else if (password !== cfPassword) {
        view.setErrorMassage('confirm-password-error', "Please did't match")
    }
    else{
        view.setErrorMassage('confirm-password-error', "")
    }
    if (firstName != '' && lastName !== '' && email !== '' && password !== '' && password !== '' && cfPassword !== '' && cfPassword === password) {
        const dataRegister = { firstName, lastName, email, password, cfPassword }
        model.register(dataRegister)

    }
}