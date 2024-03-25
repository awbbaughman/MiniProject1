const riddleDiv = document.getElementById('riddle-div');
const RIDDLE_URL = 'https://riddles-api.vercel.app/random';
const CHARACTER_URL = 'https://the-one-api.dev/v2/character?limit=6';
let characterTemplateContent = document.querySelector('table-flex-item').content;
const characterTemplate = document.getElementById('character-card-template');
document.getElementById('next-riddle-button').addEventListener('click', newRiddle);
document.getElementById('reveal-answer-button').addEventListener('click', revealAnswer);
document.getElementById('character-press').addEventListener('click', characterInfo);


function newRiddle() {
   fetch(RIDDLE_URL)
        .then(response => response.json())
        .then(responseJson => document.getElementById('riddle-div').innerHTML = JSON.stringify(responseJson.riddle))

    }

function revealAnswer(){
    fetch(RIDDLE_URL)
    .then(response => response.json())
    .then(responseJson => document.getElementById('riddle-div').innerHTML = JSON.stringify(responseJson.answer))
}

    function proceed() {
        document.getElementById("ring").classList.toggle("ring-animation");
      }

    /* I tried to fetch the correct "answer" to the corresponding "riddle" but couldn't figure out how to do it. 
   Perhaps I could have picked a different API with a JSON file that had corresponding IDs to each item; maybe I could have
   reference the IDs to keep everything consistent. As it stands, the API I chose is randomized:
    https://riddles-api.vercel.app/


    I also intended to get the ring to move from point 1 to point 3 (in the corresponcing circles) to signify
    progress towards winning the game, but couldn't figure that out either.
    */

function characterInfo(){
    fetch(CHARACTER_URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer KjPUe2H_-TdZqX5ZoJDO'
        }
     })
     .then(response => response.json())
     .then(responseJson => responseJson.forEach(item => addItem(item)))
    }

    function addItem(item) {
        const clone = document.importNode(characterTemplate, true);
        document.body.appendChild(clone);
    }

    /* The above functions are incomplete; they will eventually be used to fetch a dynamic list of data to place on the 
    "Lore" page. I would like to make it where on the left column, the dynamic list appears,
    then when clicking a div (which will be a character name), a pop up box appears on the 
    right with some sort of description about them.

    */
