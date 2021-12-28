var students = [
    {
        "name": "Kuldeep",
        "marks": 56
    },
    {
        "name": "Chanchal",
        "marks": 78
    },
    {
        "name": "Garima",
        "marks": 45
    }
]
var moreThan60 = students.filter(student => student.marks < 60)
console.log(moreThan60)