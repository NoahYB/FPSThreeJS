const baseURL = window.location.origin;

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