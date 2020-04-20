// 100
const Team = {
    NONE: 100,
    RED: 101,
    BLUE: 102
};
Object.freeze(Team);

// 200
const PlayerState = {
    NONE: 200,
    READY: 201,
    NOT_READY: 202,
    WAITING_TURN: 203
};
Object.freeze(PlayerState);

// 300
const UCEvent = {
    SEND_PHRASE: 300,
    SEND_CHARADES: 301
};
Object.freeze(UCEvent);

// 400
const Round = {
    NONE: 400,
    ONE: 401,
    TWO: 402,
    THREE: 403
};
Object.freeze(Round);

// 500
const CharadeState = {
    NEW: 500,
    GUESSED: 501
};
Object.freeze(CharadeState);

// 600
const ScreenState = {
    NEW: 600,
    READY: 601,
    WAITING_TURN: 602,
    TAKING_TURN: 603,
    ENDING_ROUND: 604,
    GAME_OVER: 605
}
Object.freeze(ScreenState);


function changeElementToTeamColor(e, team) {
    var teamClass = "noTeam";
    if (team == Team.RED) {
        teamClass = "redTeam";
    }
    else if (team == Team.BLUE) {
        teamClass = "blueTeam";
    }

    e.className = e.className.replace(/noTeam|redTeam|blueTeam/g, teamClass);
}


class Screen {
    constructor() {
        this.state = ScreenState.NEW;
        this.round = Round.NONE;
    }
}

class Player {
    constructor(device_id, profilePicture, nickname) {
        this.device_id = device_id;
        this.profilePicture = profilePicture;
        this.nickname = nickname;
        this.team = Team.NONE;
        this.state = PlayerState.NONE;
    }

    getDivID() {
        return "player" + this.device_id;
    }

    getJQueryDiv() {
        return $("#" + this.getDivID());
    }
}


class Charade {
    constructor(phrase) {
        this.phrase = phrase;
        this.state = CharadeState.NEW;
    }
}