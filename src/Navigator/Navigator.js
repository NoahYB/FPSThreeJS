let baseURL = window.location.origin;

if(baseURL === 'https://noahbrinton.com') {
    baseURL = 'https://noahbrinton.com/FPS'
}
if(baseURL === 'https://noahyb.github.io') {
    baseURL = 'https://noahyb.github.io/FPSThreeJS'
}

function goToGame() {
    window.location = (baseURL + '/src/index.html');
}

function goToServerSelection() {
    window.location = (baseURL + '/src/Pages/serverselection.html');
}

function goToDonationInformation() {
    window.location = (baseURL + '/src/Pages/donationinfo.html');
}

function goToContact() {
    window.location = (baseURL + '/src/Pages/contact.html');
}

function connectToServer(serverURL) {
    window.localStorage.setItem('serverURL', serverURL);
    window.location = (baseURL + '/src/index.html');
}
