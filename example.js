var arr = []
var result = fun(1)(2)(3)('+'); //1+2+3
console.log(result[3])//6

// function fun(x) {
//     return function (y) {
//         return function (z) {
//             return function () {
//                 return x + y + z
//             }
//         }
//     }
// }
function fun(x) {
    arr.push(x);
    return function (y) {
        if (typeof y == "string")
            arr.reduce((a = 0, e) => {
                return eval(a + y + e);
            })
        arr.push(y);
        return fun(arr)
    }
}