const Team = {
    NONE: 0,
    RED: 1,
    BLUE: 2
};
Object.freeze(Team);

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
    }

    getDivID() {
        return "player" + this.device_id;
    }

    getJQueryDiv() {
        return $("#" + this.getDivID());
    }
}