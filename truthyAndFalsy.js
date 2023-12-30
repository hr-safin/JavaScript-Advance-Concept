// falsy > "", 0, undefined, null, NaN, false, document.all
// truthy > all the thing is truthy accept falsy value


if(""){  // as we know this is falsy value
    console.log("Hello world")
}
else{
    console.log("hi world")
}

if(-1){
    console.log("truthy")
}
else{
    console.log("falsy")
}