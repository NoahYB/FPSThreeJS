# In Browser Multiplayer FPS

## Link to game hosted on github pages

https://noahyb.github.io/FPSThreeJS/

## Video of gameplay

https://www.youtube.com/watch?v=NLeuB7pLq9I

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
cd FPSBackend
npm install
npm run build
npm run start
```

## Development
To make maps
- Export as GLTF
- Names of spawn points should with 'Spawn'
- The ground should be labeled 'Ground' in order to receive shadow

## Testing
To tweak variables
- Change some variables in menu by pressing escape
- Open JS console
- Modify tunable variables using
```js
TUNABLE_VARIABLES.nameOfVariable = newValue
```
Current modifiable variables 
```js
const TUNABLE_VARIABLES = new Variables(
    {
        movementSpeed: 30,
        playerName: 'Donut',
        jumpHeight: 20,
        FOV: 120,
        gravity: .025,
        volume: .5,
        sensitivity: 1.75,
        teamKillEnabled: false,
        thirdPerson: false,
        health: 100,
    }
)
```

