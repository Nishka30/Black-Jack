// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property
let fruit=["🍎","🍊","🍎","🍎","🍊"]
let appleshelf=document.getElementById("apple-shelf")
let orangeshelf=document.getElementById("orange-shelf")
function sorting(){
    for (let i = 0; i< fruit.length; i++){
        if (fruit[i] === "🍎") {
        appleshelf.textContent+="🍎"
        }else if(fruit[i] === "🍊"){
        orangeshelf.textContent+="🍊"
        }
    }
}
sorting()




















































