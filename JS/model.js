const model = {}
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
        await firebase.auth().signInWithEmailAndPassword(email, password)
        alert('Successful login!!!')
    } catch (err) {
        alert(err.message)
    }
}