class Menu {
    constructor() {
        this.menuItems = TUNABLE_VARIABLES.variableNames;
        this.createParent();
        this.createScoreBoard();
        this.updateScores();
        document.body.append(this.parent);
        document.body.append(this.scoreBoard);
        this.loadHUD();
        this.parent.style.display = 'none';
    }

    createParent() {
        this.parent = document.createElement('div');
        this.parent.style.position = 'absolute';
        this.parent.style.width = 500;
        this.parent.style.height = window.innerHeight;
        this.parent.style.fontSize = 100;
        this.parent.style.top = 30 + 'px';
        this.parent.style.left = '30px';
        this.parent.style.background = 'rgba(122,122,122,.3)';
        this.parent.style.display = 'none';
        this.parent.id = 'menuParent';
    }

    createScoreBoard() {
        this.scoreBoard = document.createElement('div');
        this.scoreBoard.style.position = 'absolute';
        this.scoreBoard.style.width = 500;
        this.scoreBoard.style.height = window.innerHeight;
        this.scoreBoard.style.fontSize = 100;
        this.scoreBoard.style.top = 30 + 'px';
        this.scoreBoard.style.left = '530px';
        this.scoreBoard.style.background = 'rgba(122,122,122,.3)';
        this.scoreBoard.style.display = 'none';
        this.scoreBoard.id = 'scoreBoardParent';
    }

    updateScores() {
        const connectedPlayers = webSocketHandler.connectedPlayers;
        let scoresAndNames = [{
            displayName: TUNABLE_VARIABLES.playerName,
            score: player.score,
            key: webSocketHandler.id,
        }];
        Object.keys(connectedPlayers).forEach(key => {
            let connectedPlayerObject = connectedPlayers[key];
            let displayName = connectedPlayerObject.connectionDisplayName;
            let score = connectedPlayerObject.score;
            scoresAndNames.push({
                id: key,
                displayName,
                score,
            })
        })
        scoresAndNames.map((obj => {
            let display = document.getElementById(obj.id);
            if (!display) {
                display = document.createElement("div");
                display.id = obj.id;
                display.classList.add('scoreText');
                this.scoreBoard.append(display);
            }
            display.innerHTML = obj.displayName + ': ' + obj.score;
        }))
    }
    
    loadHUD() {
        this.elements = [];
        this.elements = this.menuItems.map((name, i) => {
            this.parent.append(this.loadElement(name, i));
        });
        let btn = document.createElement("button");
        btn.innerHTML = "Set Variables";
        btn.style.position = 'absolute';
        btn.style.top = (0 + (this.menuItems.length*50)) + 'px';
        btn.onclick = this.setTuningVariables;
        document.body.appendChild(btn);
        this.parent.append (btn);
    }

    setTuningVariables() {
        HTML_INPUT_FIELDS.map((id) => {
            const element = document.getElementById(id);
            TUNABLE_VARIABLES.set[id](element.value);
        })
    }

    loadElement(name, i) {
        const html = document.createElement('div');
        html.style.position = 'absolute';
        html.style.top = (0 + (i*45)) + 'px';
        html.style.left = 30 + 'px';
        html.style.width = 1000;
        html.style.height = 100;
        html.style.cursor = 'pointer';
        html.style.color = 'red';
        html.innerHTML = name;
        html.style.fontSize = 30;
        const input = document.createElement('input');
        input.id = name;
        input.style.marginLeft = '20px';
        if (name === 'volume' || name === 'sensitivity') {
            input.type = 'range';
            input.value = name ==='volume' ? 
                TUNABLE_VARIABLES[name] * 100:
                TUNABLE_VARIABLES[name]
            input.min = 0;
            input.max = name === 'volume' ? 100 : 25;
        } else {
            input.type = 'text';
            input.placeholder = TUNABLE_VARIABLES[name];
        }
        HTML_INPUT_FIELDS.push(name);
        html.append(input);
        html.addEventListener('mouseover',this.highlight);
        html.addEventListener('mouseleave',this.exit);
        return html;
    }

    loadNameChange() {

    }

    show() {
        menuOpened = true;
        this.updateScores();
        this.parent.style.display = 'block';
        this.scoreBoard.style.display = 'block';
    }

    hide() {
        menuOpened = false;
        this.parent.style.display = 'none';
        this.scoreBoard.style.display = 'none';
    }


    showScore() {
        this.updateScores();
        this.scoreBoard.style.display = 'block';
    }

    hideScore() {
        this.scoreBoard.style.display = 'none';
    }

    highlight(e) {
        e.target.style.color = "purple";
    }

    exit(e) {
        e.target.style.color = "red";
    }
}
