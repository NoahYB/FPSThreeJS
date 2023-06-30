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

let ps = [];
const coolbackgroundeffect = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    for (let i = 0; i < 300; i ++) {
        const p = document.createElement('div');
        p.style.position = 'fixed';
        p.style.bottom = `${Math.random() * h}px`;
        p.style.left = `${Math.random() * w}px`;
        p.style.background = '#28ebdb';
        const s = `${Math.random() * 10}px`;
        p.style.height = s;
        p.style.width = s;
        p.style.borderRadius = '10px';
        p.style.zIndex = -1;
        ps.push(p);
        document.body.append(p);
    }
};
window.addEventListener('resize', () => {
    console.log('resize');
    ps.forEach(p => p.remove());
    ps = [];
    coolbackgroundeffect();
});
coolbackgroundeffect();