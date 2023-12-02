// we need to specific 
// where to start
//were to finish
//step size that we use

//     start    finish   step size
for(let count=1;count<11;count+=1){   //for loop
    console.log(count)
}

for(let count=10;count<101;count+=10)
{
    console.log(count)
}

//for loops and arrays

let messages = [
    "Hey, how's it going? ",
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately. " ]
    for (let i=0;i<messages.length;i+=1){
        console.log(messages[i])
    }


    let cards=[7,3,9]
    for( let i=0;i<cards.length;i++)
    {
        console.log(cards[i])
    }

    //for loops,array and DOM
    let sentence = ["Hello ", "my ", "name", "is ", "Per"]
    let greetingEL = document.getElementById("greeting-el")
    // Render the sentence in the greetingel paragraph using a for loop and .textcontent
for (let i = 0; i < sentence . length; i++){
greetingEl.textContent += sentence [i]+" " //to add space
} //hello my name is per









//returning values in functions
let player1Time = 102
let player2Time =107
// to select many words at same time use ctrl+d
function getFastestRaceTime (){
  if (player1Time <player2Time){
     return player1Time
  } else if(player1Time>player2Time){
    return player2Time
  }else{
    return player1Time

  }
}
let fastestrace= getFastestRaceTime() 
console.log(fastestrace)//invoking the result of function in fastestrace variable
//102

let player1Time = 102
let player2Time =107
function totalracetime(){
    return player1Time + player2Time
}
let totaltime=totalracetime()
console.log(totaltime) //invoking the result of function in
//209