class GameStateVariables {
    constructor() {
        this.teamScores = {
            team1: 0,
            team2: 0,
        }
    }

    point(team) {
        this.teamScores[team] += 1;  
        menu.updateScores();
    }

    setTeamScores(one, two) {
        this.teamScores.one = one;
        this.teamScores.two = two;
        menu.updateScores();
    }
}

export const GAMESTATE_VARIABLES = new GameStateVariables();