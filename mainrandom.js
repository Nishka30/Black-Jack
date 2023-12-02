//generating random numbers using math.random()
//math object

let randomnumber = Math.random()
console.log(randomnumber)
// Math.random() generates a random number between 0 and 1(not inclusive of 1)
//gives 0.000 to 0.999
//math.random()*6 gives 0.000 to 5.999

//floored numbers using math.floor
let flooredNumber = Math.floor (3.45632)
console.log(flooredNumber)
//3
//Math.floor() removes decimals.gives absolute values.decreases


//Math.ceil rounds off the number 3.1 to 4 increase

//using math.random() and math.floor() to create a dice
let randomNumber = Math.floor( Math.random()*6)+1
console.log (randomNumber)
//1 to 6

function rolldice(){
    let randomNumber = Math.floor( Math.random()*6)+1
    return randomNumber    
}
console.log(rolldice()) //random numbers between 1 to 6


//the logical and operator
let hasCompletedCourse = true
let givesCertificate = true
if (hasCompletedCourse === true &givesCertificate === true)
generateCertificate ()
function generateCertificate(){
console. log ("Generating certificate . . . . ")
}

//task
let hassolvedchallenge=false
let hashintsleft=false

if(hassolvedchallenge===false&&hashintsleft===false){
    showsolution()
}
function showsolution(){
    console.log("showing the solution....")
}

//logical OR operator
let likesdocumentaries=true
let likestartups=false
if(likesdocumentaries===true|| likestartups===true){
    recommendmovie()
}
function recommendmovie(){
    console.log("hey checkout the film")
}


