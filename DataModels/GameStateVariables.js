class GameStateVariables {
    constructor() {
        this.teamScores = {
            one: 0,
            two: 0,
        }
    }

    point(team) {
        console.log(team);
        this.teamScores[team] += 1;  
        menu.updateScores();
    }

    setTeamScores(one, two) {
        this.teamScores.one = one;
        this.teamScores.two = two;
        menu.updateScores();
    }
}

const GAMESTATE_VARIABLES = new GameStateVariables();