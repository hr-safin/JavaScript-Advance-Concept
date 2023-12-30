// we can copy a object and array by using spread operator

// for array
let arr1 = [1,2,3,4,5]
let arr2 = [...arr1] // copied actuall copy of arr1 by using spread operator



arr1.pop()
arr2.push(7)

// console.log(arr1)
// console.log(arr2)


// for object

let info1 = {
    name : "Hasibur rahman safin",
    age : "21",
    dream : "study abroad"
}

let info2 = {...info1}

info1.name = "Mahi  my love"
info1.age = "20"

console.log(info1)
console.log(info2)