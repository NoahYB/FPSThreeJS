let baseURL = window.location.origin;

if(baseURL === 'https://noahbrinton.com') {
    baseURL = 'https://noahbrinton.com/FPS'
}
if(baseURL === 'https://noahyb.github.io') {
    baseURL = 'https://noahyb.github.io/FPSThreeJS'
}

function goToGame() {
    window.location = (baseURL + '/game.html');
}

function goToServerSelection() {
    window.location = (baseURL + '/Pages/serverselection.html');
}

function connectToServer(serverURL) {
    window.localStorage.setItem('serverURL', serverURL);
    window.location = (baseURL + '/game.html');
}