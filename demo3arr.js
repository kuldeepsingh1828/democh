var arr = [1, 2, -3, 5, 6, 7]
var s = 0;
var sum = arr.reduceRight((s, val) => {
    return s - val;
});
console.log(sum)