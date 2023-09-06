const print = (t) => {
    console.log(t);
}

//Ass -1 Values and Variables
let country, continent, population;
country = "INDIA";
continent = "ASIA";
population = 113000000;

console.log(`"country :  "${country}\n"continent :   "${continent}\n" population :  "${population}`);

//Ass - 2 Data Type
var isIsland = 13821;
print(isIsland);
print(country);
print(continent);
print(population);

// ASS -3 let, const and vaR
var language = "MARATHI";
const PI = 3.147;
print(PI);
print(language);
language = "hindi";
print(language)
//PI = 3454;            ----------got error as const  variable value cannot be change
//print(PI);

// ASS-3 Basic Operators
print(Math.floor(population / 2));
print(population++);
var finlandpop = 6000000;
print(finlandpop < population);
var avgpop = 3300000;
print(avgpop > population);
portugalpop = 11;
var description = 'PORTUGAL in Europe, and its ' + portugalpop + ' million people speal portuguese';
print(description);

// ass-4 Strings and Template Literals
description = `PORTUGAL in Europe, and its  ${portugalpop} million people speal portuguese`
print(description);

///Ass -5 Taking Decisions: if / else Statements

if (population > 3300000) {
    print('Portugal\'s population is above average');
}
else {
    let temp = (3300000 - population) / 100000;
    print('Portugal\'s population is ' + temp + ' million below average');
}

population = 13000000;

if (population > 3300000) {
    print('Portugal\'s population is above average');
}
else {
    let temp = (3300000 - population) / 100000;
    print('Portugal\'s population is ' + temp + ' million below average');
}

//Ass-6 Type Conversion and Coercion

print('9' - '5') //4
print('19' - '13' + '17')//617
print('19' - '13' + 17) //23
print('123' < 57) // flase
print(5 + 6 + '4' + 9 - 4 - 2) // 1143

//Ass - 7 Equality Operators: == vs. ===
let numNeighbours = '1'
//prompt('How many neighbour countries does your country have?');  use this when the js connected with webpage 
//it open prompt window for user input

if (numNeighbours == 1) {
    print('Only 1 border!');
}
else if (numNeighbours > 1) {
    print('More than 1 border');
}
else {
    print('No borders');
}

if (numNeighbours === 1) {
    print('Only 1 border!');
}
else if (numNeighbours > 1) {
    print('More than 1 border');
}
else {
    print('No borders');
}

//ASS - 7 Logical Operators

if (language === 'english' && population < 50 && !isIsland) {
    console.log(`You should live in ${country} :`);
} else {
    console.log(`${country} does not meet your criteria `);
}

//Ass -7  The switch Statement

switch (language) {
    case ('chinese' || 'mandarin'):
        {
            print('MOST number of native speakers!');
            break;
        }
    case ('spanish'):
        {
            print('2nd place in number of native speakers');
            break;
        }
    case ('english'):
        {
            print('3rd place');
            break;
        }
    case ('hindi'):
        {
            print('Number 4');
            break;
        }
    case ('arabic'):
        {
            print('5th most spoken language');
            break;
        }
    default:
        {
            print('Great language too :D');
        }
}

// Ass-8 The Conditional (Ternary) Operator

population > 3300000 ? print(`${country} population is above average`) : print(`${country} population is below average`);


