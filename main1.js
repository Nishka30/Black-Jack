//taking number between 2 to 11
// let firstCard=getrandomcard() //still accessible here as the declaration is done here
// let secondCard=getrandomcard()
let player={
    name:"Per", //two variables are grouped together in a bucket called player
    chips:200  
}
let cards=[] //array-ordered list of items 
let sum=0
let hasblackjack=false
let isalive=false
let message=""
let messageEL=document.getElementById("message-el")
let sumEL= document.querySelector("#sum-el") //sumEL is camolcase
let cardsEL=document.getElementById("cards-el")

//object sneak peek:values that are inherently connected together 
//but are assigned different variables.to combine them together objects are used
 //objects are buckets where data is stored

//refer to these values by object name(OBJECT NAME.KEY)


let playerEL=document.getElementById("player-el")
playerEL.textContent=player.name + ":$"+ player.chips

//create a function that returns random number between 1 to 13
//blackjack game treats ace as 11 and j,q,k as 10
//if 1 return 1
//if card number is between 11-13 return 10
function getrandomcard(){
     let randomNumber = Math.floor( Math.random()*13)+1//0-13
     if(randomNumber>10){
        return 10
     }else if(randomNumber===1){
        return 11
     }else{
        return randomNumber
     }
    }   

function startgame(){
    isalive=true
    // Generate two random numbes
    let firstCard=getrandomcard() //still accessible here as the declaration is done here
    let secondCard=getrandomcard()
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard
    // Re-assign the cards and sum variables so that the game can start
    rendergame()
}

function rendergame() {
    cardsEL.textContent="Cards: "
    // for loop that renders out all the number
     for(let i=0;i<cards.length;i++){
        cardsEL.textContent+=cards[i]+" "
     }
     sumEL.textContent="Sum :" + sum
    if(sum <= 20){ //if(false)
        message="Do you want to draw a new card?"
    }else if(sum === 21){     //if(true)//three equal to means strictly equal
        message="You have got a Blackjack!"
        hasblackjack=true
    }else { //>21
        message="You are out of the game!"
        isalive=false //out of game whem more then 22
    } 
messageEL.textContent = message
}
function newcard(){
    //only allow the player to get a new car d if she IS alive and does NOT have Blackjack
    if(isalive===true&&hasblackjack===false){
        let card=getrandomcard()
        sum  +=card
        cards.push(card)   //pushing the third card
        rendergame() 
    }
}
   







//cash out.it doesnt keep a track of whivk console did they log out so need a variable for that
//console.log(hasblackjack)

//document.querySelector(".card1")
//logging out of the game 
//console.log(message)
