const fs = require('fs');
const Location = require('./location.js');

// Used for part one
// var taxicabDistance = function (directionsInput) {
//     if (directionsInput.length == 0) {
//         return 0;
//     }
//     const directionsList = directionsInput.split(', ');
//     let currentLocation = {h: 0, v: 0};
//     let currentDir = 0;
//     for (let i = 0; i < directionsList.length; ++i) {
//         if (directionsList[i].charAt(0) == 'L') {
//             currentDir = (((currentDir-1) % 4) + 4) % 4;
//         } else if (directionsList[i].charAt(0) == 'R') {
//             currentDir = (((currentDir+1) % 4) + 4) % 4;
//         } else {
//             throw new Error("Incorrect directions format");
//         }
//         let moveBy = parseInt(directionsList[i].substr(1));
//         if (isNaN(moveBy)) {
//             throw new Error("Incorrect directions format");
//         }
//         switch (currentDir) {
//             case 0: 
//                 currentLocation.v += moveBy;
//                 break;
//             case 1:
//                 currentLocation.h += moveBy;
//                 break;
//             case 2:
//                 currentLocation.v -= moveBy;
//                 break;
//             case 3: 
//                 currentLocation.h -= moveBy;
//                 break;
//         }
//     }
//     const totalTravelled = Math.abs(currentLocation.h) + Math.abs(currentLocation.v);
//     return totalTravelled;
// }

function mod(a, b) { return ((a % b) + b ) % b }

function processDirection(currentDir, instruction) {
    if (instruction.charAt(0) == 'L') {
        return mod(currentDir-1, 4);
    } else if (instruction.charAt(0) == 'R') {
        return mod(currentDir+1, 4);
    } else {
        throw new Error("Incorrect directions format");
    }
}

function parseMoveBy(instruction) {
    let moveBy = parseInt(instruction.substr(1));
    if (isNaN(moveBy)) {
        throw new Error("Incorrect directions format");
    }
    return moveBy;
}

var taxicabDistanceOfFirstRepeated = function (directionsInput) {
    let visitedPlaces = [];
    let currentLocation = new Location(0, 0);
    visitedPlaces.push(currentLocation);
    let currentDir = 0;
    const directionsList = directionsInput.split(', ');

    for (let i = 0; i < directionsList.length; ++i) {
        currentDir = processDirection(currentDir, directionsList[i]);
        moveBy = parseMoveBy(directionsList[i]);

        for (let j = 1; j <= moveBy; ++j) {
            const newLocation = Location.move(currentLocation, currentDir, j);
//          if (visitedPlaces.some(newLocation.equals)) {
            if (visitedPlaces.some(function (thing) {return newLocation.equals(thing);})) {
                return newLocation.distance();
            } else {
                visitedPlaces.push(newLocation);
            }
        }
        currentLocation = Location.move(currentLocation, currentDir, moveBy);
    }
    throw new Error("No location visited twice");
}



module.exports = taxicabDistanceOfFirstRepeated;
/* used for actually solving the problem
fs.readFile("./1input", "utf8", function (err, data) {
    console.log(taxicabDistanceOfFirstRepeated(data));
})*/