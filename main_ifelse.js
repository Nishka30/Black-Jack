//suitable to enter the club
let age =21
if (age<=20){
    console.log("you cannot enter the club")
}else{
    console.log("welcome!")
}


//get birthday cards if you are 100
let age = 100
if(age<100){
    console.log("not eligible")
}else if(age===100){
    console.log("here is your birthday card")
}else {
    console.log("not eligible.you have already gotten one")
}

//boolean
console.log(11<=11) //true


//array practice
let featuredPosts = [
    "Check out my Netflix clone",
    "Here's the code for my project",
    "I've just relaunched my portfolio"
]

console.log(featuredPosts[0]) //check out...

console.log(featuredPosts.length)  //3

let per=["nishka",20,true]


//adding and removing data from array
//push method to add data.
let cards=[7,4]
cards.push(6)
console.log(cards)

//task 
 let messages = [
    "Hey, how's it going? ",
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately. " ]

    let newmsg="same here!"
    messages.push(newmsg)
    console.log(messages)

//pop method to remove last item in an array
messages.pop()
console.log(messages)



