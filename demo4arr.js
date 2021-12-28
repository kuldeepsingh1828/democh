var arr = [1, 2, 3, 5, 6, 7]
var cubeArr = arr.map(num => num ** 3)
console.log(arr)

// cubeArr.shift('first element')
// console.log(cubeArr)
// cubeArr.unshift('first element')
// console.log(cubeArr)
var splice = arr.splice(-4,2);
console.log(splice)