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
    WAITING_TURN: 203,
    TAKING_TURN: 204,
    GUESSING: 205,
    WAITING_FOR_NEXT_ROUND: 206,
    GAME_OVER: 207,
    LATE_ENTRY: 208
};
Object.freeze(PlayerState);

// 300
const UCEvent = {
    SEND_PHRASE: 300,
    SEND_CHARADES: 301,
    START_GAME: 302,
    START_NEXT_ROUND: 303,
    START_NEW_GAME: 304,
    // In case of re-connect
    SEND_PLAYER: 305
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

// 700
const RulesPage = {
    SUMMARY: 700,
    SETUP: 701,
    INSTRUCTIONS: 702,
    ROUND: 703
}
Object.freeze(RulesPage);



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
        this.isCaptain = false;

        // Fields for keeping track in case of disconnect
        this.isConnected = true;
        this.phrasesSubmitted = 0;
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
        this.team = Team.NONE;
    }
}