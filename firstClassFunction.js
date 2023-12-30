// first class function

const myFunc = function() {
  console.log("Hello world")
}


function myfunc2(fnc) {
    fnc()
}

myfunc2(()=> {
    console.log("hello i am function 2")
})