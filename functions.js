function fun() {
    console.log('hi Garima and Chanchal')
}
function funret() {
    return "Hi guys"
}
fun();
var ret = funret();
console.log(ret)

//part 2

var fun = function () {
    console.log('function without a name');
}
fun();

//es6 - =>
var fun = () => {
    console.log('function with Aero operator')
}
fun();

//es6 -- single parameter
var fun = x => {
    console.log('function with Aero operator with single parameter ' + x)
}
fun("kuldeep");

//es6 -- return single statment
var fun = x => 'function with Aero operator with single parameter ' + x
console.log(fun("kuldeep"));
