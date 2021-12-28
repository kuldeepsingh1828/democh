//JSON - JAVASCRIPT OBJECT NOTATION
//[{"name":"Kuldeep"},{"name":"Kuldeep2"},{"name":"Kuldeep3"}]
var object = { "name": "Chanchal", "age": 27, "ismale": true, "dob": null }
var array = [1, 2, 3, 5]

var jsonObj = JSON.stringify(object);
var jsonArr = JSON.stringify(array);


//convert from JSON to javascript object or array
var normalObj = JSON.parse(jsonObj);
console.log(normalObj)