
// Task - 1

var array = [1, 2, 3, 4, 5]

for (var element of array) {
    console.log(2*element)
}

// Task - 2

var obj = {book:5, pen: 10, bag:1 }
for(var prop in obj){
    console.log(`${prop}:${obj[prop]}`)
}
//    -----   //


// // Task - 3

function delay(string,x){
let delay = 0
    for (const e of string) {
        setTimeout(function (){ 
            console.log(e)

        }, delay)
        delay += 1000 
    }


}

string = ["HTML", "CSS", "JavaScript"]

delay(string);