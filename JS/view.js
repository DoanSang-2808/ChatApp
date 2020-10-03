const view = {}
view.setActiveScreen = (screenName) => {
    switch(screenName){
        case 'registerPage':
            document.getElementById('app').innerHTML = conponent.registerPage;
            
        break;
        case 'loginPage' :
            document.getElementById('app').innerHTML = conponent.loginPage;
        break;
    }
}
