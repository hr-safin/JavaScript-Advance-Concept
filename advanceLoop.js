// forEach > It's important to note that forEach is not suitable for all situations.
            // If you need to transform the elements of an array and create a new array , 
            // with the results you might want to use map. If you need to filter elements based on a condition,
            // you can use filter. Each array iteration method serves a different purpose, 
            // so choose the one that best fits your needs.


const newArray = [1,2,3,4,5,6,7]

newArray.forEach((elem) => {
    // console.log(elem, "safin")
})

// for in loop for object

const myObj = {
    name : "Hasibur rahman safin",
    age : "23",
    dream : "to become a maching learning engineer",
    country : "USA"
}

for(let key in myObj){
   // console.log(key, ":", myObj[key])
}



// forof loop for array

const myArray = ["hasibur"]

for(let str of myArray){
    console.log(str.split(""))
}





