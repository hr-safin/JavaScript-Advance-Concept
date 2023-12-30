function doSomething(callback){
 setTimeout(() => {
    const data = "This is fetched data"
    callback(data)
 }, 2000)
}


doSomething((result) => {
    console.log("Revieve Data", result)
})