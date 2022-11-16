let baseURL = window.location.href;

if(baseURL === 'https://noahbrinton.com') {
    baseURL = 'https://noahbrinton.com/FPS'
}
if(baseURL === 'https://noahbrinton.com') {
    baseURL = 'https://noahbrinton.com/FPS'
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