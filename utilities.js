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
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}