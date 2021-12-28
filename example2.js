// part 1 
// memory allocation
//a : 23
//x : () => {
// console.log("Fg")
// }

// part 2
// something
//Fg
// timer : 
// x();


var a = 23;
var x;
setTimeout(function () {
    x();
}, 10);
setTimeout(function () {
    x = () => {
        console.log("Fg")
    }
}, 9);
console.log("something1")
console.log("something2")
console.log("something3")
console.log("something4")