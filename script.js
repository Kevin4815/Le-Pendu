// Get DOM elements
let word = document.querySelector('#word');
let statue = document.querySelector('#statue');
let next = document.querySelector('#next');
let quite = document.querySelector('#quite');
let container2 = document.querySelector('.container2');
let container = document.querySelector('.container');
let alfa = document.querySelector('#alfa');
let start = document.querySelector('#go');

var choosen;

// Elements appears at the end of the game
quite.addEventListener('click', () => {
    $('.container').css('display', 'none');
    $('#finish').css('display', 'block');
});

// Welcome to launch the game
start.addEventListener('click', () => {
    $('#start').css('display', 'none');
    $('.container').css('display', 'block');

    const TL = gsap.timeline({paused: true});

    TL
    .from(container,1 ,{top: -50, opacity: 0, ease: "power2.out"}, 0.3)

    TL.play();
});

// Hangman words
const words = ["ATTAQUER", "DORMIR", "FAIM", "TUTOS", "CHANTER", "PARLER", "RAMASSER", "GRAVIR", "ABEILLES", "JEUNE", "ACCELERE",
 "FLAMBEAU", "WHISKY", "LOGEMENT", "FINIR" , "VIKING", "LASAGNE", "ACCUEIL", "AGENDA", "BOXEUR", "BRONZER", "VISEUR", "ABANDONS",
  "CAFARD", "CAPABLES", "URGENT", "UTOPIQUE", "VOYOU", "XENON", "OBEIR" ,"PAGE", "KAKI", "IGNORER", "ZOMBIE", "QUILLES", "LEZARDS",
"GAMELLE", "GAINAGE", "MENTAL", "RACONTES"];


// Generate a random number
let random = Math.floor(Math.random() * words.length)
const wordLetter = words[random].split("");

let wordLetter2 = [];
let carcode = [];
let show = wordLetter[0];


//Hangman images for the score
const hungman = ["images/pendu1.png", "images/pendu2.png", "images/pendu3.png",
 "images/pendu4.png","images/pendu5.png", "images/pendu6.png", "images/pendu7.png", "images/pendu8.png",
  "images/pendu9.png", "images/pendu10.png"];


let cpt = 0;
let removedItem;

document.pictures.src = hungman[cpt];

// Function to change the image of the hanged man
function slide(){
 
    document.pictures.src = hungman[cpt +1];

    if(cpt < hungman.length -2){
        cpt++;
    }
    else if(cpt >= hungman.length -2){

        statue.innerHTML = "Vous avez perdu...<br>Le mot était " + words[random];
        container2.style.display = "block";
        removedItem = words.splice(i);
    }
}

// Show dashes, minus the letters already visible
for(let i = 0; i < wordLetter.length; i++){
    wordLetter2.push(" _ ");
}
word.innerHTML = wordLetter2.join('');
let number = 1;
let compt = 0;

for(i = 0; i < wordLetter.length; i++){
    if(show == wordLetter[i]){
        
        wordLetter2[i] = show;
        word.innerHTML = wordLetter2.join(''); 
        compt ++;
    }
}

let tabLetter = [];

//Displays the letters of the alphabet
for(let i = 65; i <= 90; i++){
    tabLetter.push(String.fromCharCode(i));
}

let letterLi = [];

for(let i = 0; i < tabLetter.length; i++){

     letterLi.push(`<button class="button">${tabLetter[i]}</button>`);
}

alfa.innerHTML = letterLi.join('');

//Event click on each letter
const buttons = document.querySelectorAll('.button');

for(const button of buttons) {
    button.addEventListener('click', (event) => {
        const letter = event.target.innerHTML;
        choosen = letter;
        verif();
        button.style.backgroundColor = "rgb(73, 74, 150)";
        button.disabled = true;
    })
}

// Check win or lose
function verif(){
    
    let isInWord = false;
    
    for(i = 0; i < wordLetter.length; i++){
        if(choosen == wordLetter[i]){
            
            wordLetter2[i] = choosen;
            word.innerHTML = wordLetter2.join(''); 
            isInWord = true; 
            number++;
            if(number === wordLetter.length-compt+1){
                statue.innerHTML = "Vous avez gagné !";
                container2.style.display = "block";
                $('#statue').css('margin-top', '-170px')
            }
        }
    }

    if(isInWord == true){}
    else{
        slide();
    }
}

// Restart the choice if ask
(function startAgain(){next.addEventListener('click', () => {
    restart = true;
    if(restart){
        document.location.reload();
    }
})})();


