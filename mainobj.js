//objects-stores in depth data - composite/complex data type
//key value pairs

let course={
        title: "Learn CSs Grid for free", //title is the key and learn... is the value
        Lessons : 16,
        creator: "Per Harald Borgen",
        length:63,
        level:2
        isfree:true,
        tags:["html","css"]
}

//things with same behaviour are grouped together
console.log(course.length) //63 dot notation
console.log(course["tags"]) //bracket notation turns keyname into a string

//task
let castle = {
    title: "Live like a king in my castle",
    price: 190,
    isSuperHost: true,
    images : ["img/castlel . png", "img/caste2 . png"]
}
    console. log (castle . price)  //190
    console. log (castle . isSuperHost) //true

