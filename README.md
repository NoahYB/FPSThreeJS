# In Browser FPS

## Requirements for local testing

npm, node, python (or something to run a webserver)

## Installation

To host a local webserver instance
```sh
git clone https://github.com/NoahYB/FPSThreeJS.git
cd FPSThreeJS
python3 -m http.server 1234
go to localhost:1234
```

To host the multiplayer server
```sh
git clone https://github.com/NoahYB/mousey-be
npm install
cd back_e
node mouseApp.js
```

## Development
To make maps
- Export as GLTF
- Names of spawn points should with 'Spawn'
- The ground should be labeled 'Ground' in order to receive shadow


