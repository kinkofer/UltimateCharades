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
    NOT_READY: 202
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
    ONE: 400,
    TWO: 401,
    THREE: 402
};
Object.freeze(Round);

// 500
const CharadeState = {
    NEW: 500,
    GUESSED: 501
};
Object.freeze(CharadeState);


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