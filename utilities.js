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


function shuffle(array) {
    return array.sort( _ => Math.random() - 0.5);
}