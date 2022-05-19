'use strict';

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Sam', 'Sam'];

let arr = students;
console.log(students);

function sortStudentsByGroups(arr) {
    let result = [],
        maxPlayers = 3, // CHANGE THIS ITEM IF THERE ARE MORE OR LESS THAN 3 PLAYERS IN TEAM
        maxTeams = 3, // CHANGE THIS ITEM IF THERE ARE MORE OR LESS THAN 3 TEAMS
        array = arr.slice().sort();
    // COUNTING TEAMS
    if (Math.floor(array.length/maxPlayers) < 3) {
        result.push('Не собирается 3 команды по 3 человека');
        return result;
    }
    // result.push('Собирается 3 команды по 3 человека!!!!'); // OPTIONAL ROW
    let count = 0;
    for (let i = 0; i < maxTeams; i++) {
        let teams = [];
        for (let j = 0; j < maxPlayers; j++) {
            teams.push(array[count]);
            count++;
        }
        result[i] = teams;
    }

    result[maxTeams] = 'Оставшиеся студенты: ';
    // CHECKING FOR THE PRESENCE OF EXTRA STUDENTS
    if (maxPlayers * maxTeams === array.length) {
        result[maxTeams] += '-';
        return result;
    }

    for (let i = count; i < array.length; i++) {
        result[maxTeams] += array[i];
        if (i < array.length - 1) {
            result[maxTeams] += ', ';
        }
    }
    return result;
}

console.log(sortStudentsByGroups(students));




//// FROM NEXT LESSON
// console.log(typeof(parseInt(15, 2)));
// console.log(parseInt(15, 2));
