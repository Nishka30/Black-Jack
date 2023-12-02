//object and functions task
let person={
    name:"Nishka",
    age:"20",
    country:"India"

}
function logData()
{
    console.log(person.name+" is "+person.age+" years old and lives in "+person.country)
}
logData()

//if else statement
let age=15

if(age<6){
    console.log("free")
}else if(age<17){
    console.log("child discount")
}else if(age<27){
    console.log("student discount")
}else if(age<67){
    console.log("full price")
}else{
    console.log("senior citizen discount")
}

//for loop and arrays
let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan "]
console.log("The 5 largest countries in the world:")
for(let i=0;i<largeCountries.length;i++){
    console.log("-" +largeCountries[i])
}


//push,pop,shift and unshift 
//push and pop works at the end of the array
//shift (remove) and unshift(remove) works at the beigning of array
let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco "]
largeCountries.shift() //(0)
largeCountries.pop(4)
largeCountries.unshift("China")
largeCountries.push("Pakistan")
console.log(largeCountries)


//and operator
let dayOfMonth =13
let weekday = "Friday"
if(dayOfMonth ===13&&weekday==="Friday"){
    console.log("😀")
}

//rock,paper and scissor game
let hands = ["rock", "paper", "scissor"]
//Create a function that returns a random item from the array
function getHand (){
let randomIndex = Math.floor(Math.random()*3)
return hands[randomIndex]
}
console.log( getHand ())




























































