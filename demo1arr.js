var arr = ["Kuldeep", "Garima", "chanchal", 12, 4556, 787, 89, 34, true, false, undefined, null]
var demoArr = []
var stringArr = []
var numArr = []
var boolArr = []
var filterFun = (e) => {
    if (typeof e == type)
    return true;
}
var type = 'string'
demoArr = arr.filter(filterFun)
console.log(demoArr)
type='number'
demoArr = arr.filter(filterFun)
console.log(demoArr)
type='boolean'
demoArr = arr.filter(filterFun)
console.log(demoArr)
type='undefined'
demoArr = arr.filter(filterFun)
console.log(demoArr)
type='object'
demoArr = arr.filter(filterFun)
console.log(demoArr)
// console.log(stringArr)
// console.log(numArr)
// console.log(boolArr)