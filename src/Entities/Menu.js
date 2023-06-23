export class Menu {
    constructor(webSocketHandler, player) {
        this.player = player;
        this.webSocketHandler = webSocketHandler;
        this.menuItems = TUNABLE_VARIABLES.variableNames;
        this.createParent();
        this.createScoreBoard();
        this.updateScores();
        document.body.append(this.parent);
        document.body.append(this.scoreBoard);
        this.loadHUD();
        this.parent.style.display = 'none';
        this.opened = false;
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
        this.scoreboardParent = document.getElementById('scoreboardParent');
        if (undefined === 'FFA') {

        } else {
            this.scoreBoardRed  = document.getElementById('scoreboardRed');
            this.scoreBoardBlue = document.getElementById('scoreboardBlue');
        }
    }

    updateScores(updateTeams) {
        const teamOneScore = document.getElementById('teamScoreRed');
        const teamTwoScore = document.getElementById('teamScoreBlue');

        teamOneScore.innerHTML = GAMESTATE_VARIABLES.teamScores.team1;
        teamTwoScore.innerHTML = GAMESTATE_VARIABLES.teamScores.team2;

        const connectedPlayers = this.webSocketHandler.connectedPlayers;
        
        let scoresAndNames = [{
            displayName: TUNABLE_VARIABLES.playerName,
            score: this.player.score,
            key: this.webSocketHandler.id,
            team: this.player.team,
        }];

        Object.keys(connectedPlayers).forEach(key => {
            let connectedPlayerObject = connectedPlayers[key];
            let displayName = connectedPlayerObject.connectionDisplayName;
            let score = connectedPlayerObject.score;
            let team = connectedPlayerObject.team;
            scoresAndNames.push({
                id: key,
                team,
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
                if (obj.team === 'team1') {
                    this.scoreBoardRed.append(display);
                } else if (obj.team === 'team2') {
                    this.scoreBoardBlue.append(display);
                }
            }
            if (updateTeams) {
                if (obj.team === 'team1') {
                    this.scoreBoardRed.append(display);
                } else if (obj.team === 'team2') {
                    this.scoreBoardBlue.append(display);
                }
            }
            display.innerHTML = obj.displayName + ': ' + obj.score;
        }))
    }
    
    loadHUD() {
        this.elements = [];
        this.elements = this.menuItems.map((name, i) => {
            this.parent.append(this.loadElement(name, i));
        });
        let changeTeam = document.createElement("button");
        changeTeam.innerHTML = "Change Team";
        changeTeam.onclick = this.openChangeTeam;
        changeTeam.style.position = 'absolute';
        changeTeam.style.top = (0 + ((this.menuItems.length) * 50)) + 'px';
        this.parent.append(changeTeam);

        let btn = document.createElement("button");
        btn.innerHTML = "Set Variables";
        btn.style.position = 'absolute';
        btn.style.top = (0 + ((this.menuItems.length + 1) * 50)) + 'px';
        btn.onclick = this.setTuningVariables;
        document.body.appendChild(btn);
        this.parent.append(btn);
    }

    openChangeTeam() {
        menu.hide();
        this.opened = true;
        document.getElementById('teamselector')
            .style
            .display = 'block';
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
        if (name === 'volume') {
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

    displayGameOver(winner, specialMessage, timeTillMatch, topScorer) {
        const overlay = document.getElementById('gameOverScreen');
        overlay.style.display = 'block';
        const mvp = document.getElementById('mvp');
        const winnerText = document.getElementById('winnerText');
        const matchTimer = document.getElementById('matchTimer');

        mvp.innerHTML = `mvp: ${topScorer}`;
        winnerText.innerHTML = `winner: ${winner}`;
        matchTimer.innerHTML = `next match in ${timeTillMatch} seconds`
    }

    hideGameOver() {
        const overlay = document.getElementById('gameOverScreen');
        overlay.style.display = 'none';
    }

    loadNameChange() {

    }

    show() {
        this.opened = true;
        this.updateScores();
        this.parent.style.display = 'block';
    }

    hide() {
        this.opened = false;
        this.parent.style.display = 'none';
    }


    showScore() {
        this.updateScores();
        this.scoreboardParent.style.display = 'flex';
    }

    hideScore() {
        this.scoreboardParent.style.display = 'none';
    }

    highlight(e) {
        e.target.style.color = "purple";
    }

    exit(e) {
        e.target.style.color = "red";
    }
}
