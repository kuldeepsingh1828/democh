var arr = [12, 3, 4, 5, 6]
var op = '/';
var result = arr.reduce((a = 0, e) => {
    return eval(a + op + e);
})
console.log(result)