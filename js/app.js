  'use strict'
// //Confirming that the user wants to play the game
// var correctAnswerCount = 0 //counts the number of times you get an answer correct
// var intro = confirm('Quick get ready want to play guessing game? Only Answer with Y and N');

// if(intro){ 
//     //Where did i work Question
//     var myJob = prompt('Did i work in the navy?').toUpperCase();
//     if(myJob === 'Y' || myJob === "YES"){
//         alert('Wrong Answer Sorry');
//     } 
//     else if(myJob === 'N'|| myJob === "NO"){
//         alert('Good job you guessed right!');
//     }
//     else{ alert('Sorry but you didnt follow my instructions please only answer with\
//          Y and N.');
//         } 
//     console.log('myJob', myJob);
    
//     //What is my age question
//     var myAge = prompt('Is my age 22').toUpperCase();
//     if(myAge === 'Y' || myAge === 'YES'){
//         alert('Good job you guessed right!');
//     } 
//     else if(myAge === 'N' || myAge === "NO"){
//         alert('Wrong Answer Sorry');
//     }
//     else{ alert('Sorry but you didnt follow my instructions please only answer with\
//              Y and N.');
//             } 
//     console.log('myAge:', myAge);
//     //Do i love tequila question
//     var myLoveForTequila = prompt('Do i love tequila?').toUpperCase();
//     if(myLoveForTequila === 'Y'|| myLoveForTequila === 'YES'){
//         alert("Of course who doesn't love tequila");
        
//     }
//     else if(myLoveForTequila === 'N'|| myLoveForTequila === 'NO'){
//         alert('Sorry to tell you but I do.');
//     }
//     else{ alert('Sorry but you didnt follow my instructions please only answer with\
//         Y and N.');
//     } 
//     console.log('myLoveForTequila:', myLoveForTequila);
//     //Allergy question
//     var myAllergy = prompt('Am I allergic to anything?').toUpperCase();  
//     if(myAllergy === 'Y' || myAllergy === 'YES'){
//         alert('Correct im allergic to mosquitos');
//     } 
//     else if(myAllergy === 'N' || myJob === 'NO'){
//         alert('Incorrect im allergic to mosquitos');
//     } 
//     else{
//         alert('Sorry but you didnt follow my instructions please only answer with\
//              Y and N.');
//     } 
//     console.log('myAllergy:', myAllergy);
//     //Did i go to college question
//     var myEducation = prompt('Did i go to college?').toUpperCase();
//     if(myEducation === 'Y' || myEducation === 'YES'){
//         alert('Correct but i dropped out.');
//         count++;
//     } 
//     else if(myEducation === 'N' || myJob === 'NO'){
//         alert('Incorrect I did but i dropped out.');
//     } 
//     else{ alert('Sorry but you didnt follow my instructions please only answer with\
//              Y and N.');} 
//     console.log('myAge:', myAge);
    
//     //Number guessing question six
//     var guessesForQuestion6 = 4;
//     while(guessesForQuestion6 > 0 && usersNumber !== 7){
//         var usersNumber = Number(prompt('Guess a number between 1-10'));
//         console.log('usersNumber:', usersNumber);
//         guessesForQuestion6--;
//         if(usersNumber === 7){
//             alert('You guessed correct.');
//             } 
//         else if(usersNumber > 7){
//             alert('Too High, you have ' + guessesForQuestion6 + ' guesses remaining.');
//         }
//         else if(usersNumber < 7){
//             alert('Too low, you have ' + guessesForQuestion6 + ' guesses remaining.');
//         }
//     }
    //seventh question
    var guessForQuestion7 = 6
    var myHome = ['PUERTO RICO', 'FLORIDA', 'GEORGIA', 'KOREA'];
    var yourGuessStatus = false;
    while(guessForQuestion7 > 0 && !yourGuessStatus){
        var yourGuess = prompt('Guess a place I haved lived in only name states or countrys.').toUpperCase();
        console.log(yourGuess);
        guessForQuestion7--;
        for(var i=0; i < myHome.length; i++){
            if(yourGuess === myHome[i]){
                alert('You guessed correct.');
                yourGuessStatus = true;
                break;
            }
            else if(i === myHome[myHome.length - 1] && guessForQuestion7 > 0){
                alert('Please try again you have ' + guessForQuestion7 + ' tries left');
                yourGuess = prompt('You have '+ guessForQuestion7 + ' tires left.');
                guessForQuestion7--;
            }
            if(guessForQuestion7 === 0){
                alert('Your out of guesses.');
            }
        }   
    }
//}