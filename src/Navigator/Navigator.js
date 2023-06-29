let baseURL = window.location.origin;

if(baseURL === 'https://noahbrinton.com') {
    baseURL = 'https://noahbrinton.com/FPS'
}
if(baseURL === 'https://noahyb.github.io') {
    baseURL = 'https://noahyb.github.io/FPSThreeJS'
}

window.goToGame =  () => {
    window.location = (baseURL + '/src/index.html');
}

window.goToServerSelection =  () => {
    window.location = (baseURL + '/src/Pages/serverselection.html');
}

window.goToDonationInformation = () => {
    window.location = (baseURL + '/src/Pages/donationinfo.html');
}

window.goToContact = () => {
    window.location = (baseURL + '/src/Pages/contact.html');
}

window.connectToServer = (serverURL) => {
    window.localStorage.setItem('serverURL', serverURL);
    window.location = (baseURL + '/src/index.html');
}
