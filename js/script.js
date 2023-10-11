
//Oppgave 1

function printSeason(season) {
    console.log(season);
    }

    printSeason ("summer");


//Oppgave 2

function printNumbers (firstNumber, secondNumber) {
    console.log(firstNumber, secondNumber);
}
printNumbers (3, 5)

//Oppgave 3

function addNumbers (num1, num2, num3){
    const result = num1 + num2 + num3;
    console.log(num1 + num2 + num3);

    return result;
}
const totalValue = addNumbers(8, 10, 5)

const total= document.querySelector(".total")
/* total.innerHTML = "Total: " + totalValue; */
total.innerHTML = `Total: ${totalValue}`;


//Oppgave 4 //hjelp fra GPT

function createGreeting (name){
    const greeting = "Hello, my name is" + " " + name;
    return greeting;

}
const userName = "Stian";

const htmlGreeting = document.querySelector("#name");
htmlGreeting.innerHTML = createGreeting(userName);

//Oppgave 5

const sports = ["golf", "football", "cricket"];

function printListItems (sport){
}
for (let i = 0; i < sports.length; i++){
    console.log(sports[i]);
}
printListItems(sports);

//Oppgave 6

const games = [
    {
        name: "Starcraft 2",
        released: "2010",        
    },
    {
        name: "Age of Empires II",       
    },
    {
        name: "Cyberpunk 2077",
        released: 2020
    }
];

function createGames(gameList){
    let html = "";

    for (let i = 0; i < gameList.length; i++){
    const game = gameList[i]
    const released = game.released || "Not specified";

    html += `
    <div class="game">
    <h2>${game.name}</h2>
    <p>Released: ${released}</p>
    </div>
    `;
    }

    return html;
}

const gameContainer = document.querySelector(`.game-container`);
gameContainer.innerHTML =createGames(games);