// // // // // // // MACROS // // // // // // // //
// let minSentenceLength = 3;
let maxSentenceLength = 2;

let schizomod = true;
let charChance = 6;         
let spaceChance = 2;

let useOldDictionary = false;

function set_maxSentenceLength(val){
    maxSentenceLength = val;
    console.clear()
    logMacros();
}
function set_schizomod(val){
    schizomod = val;
    console.clear()
    logMacros();
}
function set_charChance(val){
    charChance = val;
    console.clear()
    logMacros();
}
function set_spaceChance(val){
    spaceChance = val;
    console.clear()
    logMacros();
}
function set_useOldDictionary(val){
    useOldDictionary = val;
    console.clear()
    logMacros();
}



// // // // // // // // // // // // // // // // // // 



const textContainer = document.getElementById('textContainer');
let concatArray = [nouns, verbs, adjectives, determiners]
let finishSententence = "";

 
function randomSentence(){
          
    
//    chnged random from 10 to 5
    for (let i = 0; i < [Math.floor(Math.random() * maxSentenceLength) + 1]; i++) {

        // random word type
        let ranFirstIndex = Math.floor(Math.random() * concatArray.length);

    
        let ranSecondIndex;  
        
    if (ranFirstIndex == 0){
        ranSecondIndex = nouns.length;
    } else if (ranFirstIndex == 1){
        ranSecondIndex = verbs.length;
    } else if(ranFirstIndex == 2){
        ranSecondIndex = adjectives.length;
    } else if(ranFirstIndex == 3){
        ranSecondIndex = determiners.length;
    }
        
    finishSententence += " " + concatArray[ranFirstIndex][Math.floor(Math.random() * ranSecondIndex)];
        
    }
    
    
//    MOD BEGINS:  for id m theft able type nmes 
    if (schizomod === true) {
          
   var modFinSent = ""
   
   for (let i = 0; i < finishSententence.length; i++){
           if ((Math.random() * (10 - 1) + 1) <= charChance) {
               modFinSent+= finishSententence[i];
           } 
           if (((Math.random() * (10 - 1) + 1) <= spaceChance)) {
               modFinSent += " ";
           }
   }
//        
finishSententence = modFinSent  
    }
    //    MOD ENDS 
    
    return finishSententence;
}



function randomSentenceFromDictionary(){
          
    
    //    chnged random from 10 to 5
        for (let i = 0; i < [Math.floor(Math.random() * maxSentenceLength) + 1]; i++) {
            
        finishSententence += " " + englishDictionary[Math.floor(Math.random() * englishDictionary.length)];
            
        }
        
    //    MOD BEGINS:  for id m theft able type nmes 
        if (schizomod === true) {
              
       var modFinSent = ""
       
       for (let i = 0; i < finishSententence.length; i++){
               if ((Math.random() * (10 - 1) + 1) <= charChance) {
                   modFinSent+= finishSententence[i];
               } 
               if (((Math.random() * (10 - 1) + 1) <= spaceChance)) {
                   modFinSent += " ";
               }
       }
    //        
    finishSententence = modFinSent  
        }
        //    MOD ENDS 
        
        return finishSententence;
    }



function PrintSentence(){
        newSentence = document.createElement('h1');
        newSentence.id = 'currentWords'
        newSentence.innerText = finishSententence;
        textContainer.append(newSentence)
}



function keyPressed(){
    useOldDictionary ? randomSentence() : randomSentenceFromDictionary();
    PrintSentence();   
    finishSententence = ''
}

function logSavedWords() {
    let savedWords = ''

    for (let i = 1; i <= localStorage.length; i++) {
        savedWords += localStorage.getItem(`${i}`) + ' \n \n';
    }
    console.log(savedWords);
}

textContainer.addEventListener('keydown', (evt) => {
    evt.preventDefault();
    let currentWords = document.getElementById('currentWords');

    if (evt.key === 'Enter') {
        currentWords.remove();
        keyPressed(); 
    }
    if (evt.key === 'Tab') {
        logSavedWords();
    }
    if (evt.key === '\\') {
        localStorage.setItem(`${localStorage.length + 1}`, `${currentWords.innerText}`);
        console.log(`Saved ${currentWords.innerText}`);
    }
})

function logMacros(){
    console.log(`
        // // // // // HOW? // // // // // // // 

            // MACROS
        maxSentenceLength = ${maxSentenceLength};
        useOldDictionary = ${useOldDictionary};

        schizomod = ${schizomod};
        charChance = ${charChance};         
        spaceChance = ${spaceChance};        

        to change macro:
              set_'macroName'(value); 
        e.g:  set_charChance(7);
        
            // INSTRUCTIONS
        make new phrase: Enter
        save a word: \\
        see saved words in console: Tab
        to clear saved words: localStorage.clear()

        // // // // // // // // // // // // // // 
         `)
}


logMacros();
keyPressed();

   