// var > var are function-scoped which means var is accessable within  the function 
         // which they are declared
         // var add itself to the window object

function sayHello(){
    
    for(var i =0; i<12; i++){
        console.log(i, "inside loop")
    }

    console.log(i, "outside the loop")
}

var a = 12

console.log(window.a)

// let > varibale declared with the let are block scoped or braces scoped 
        // which means their accessable within the block scoped (inside the braces)
        // let does not itself to the window object


let b = 12

// const  > const are also block scoped but it is not hoisted like let and
            // we can not change its value after decalaration
            // const does not add itself to the window object

