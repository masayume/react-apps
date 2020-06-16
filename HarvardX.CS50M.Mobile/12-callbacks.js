// callbacks  execute function once asyncronous call returns value, the program doesn't have to halt and wait for that value


function doSomethingAsync(callback) {

    // console.log(callback(1))
    callback(1)
} 

function doSomethingElseAsync(callback) {
    setTimeout(function() {callback(1)}, 1000)
}

doSomethingAsync(console.log)
doSomethingElseAsync(console.log)
