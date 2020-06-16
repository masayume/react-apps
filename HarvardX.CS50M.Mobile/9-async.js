// javascript is single-threaded and synchronous (a while(true) hangs the browser)
// there are async functions

// Execution stack is like a deck of cards
// setTimeout puts the function in the "browser API" and then in the "function queue"
// the "event loop" puts the functions to be executed back in the stack when its time

// asyncronous functions: setTimeout, XMLHttpREquest(), fetch(), jQuery.ajax(), DB calls, 

function printOne()  {
    console.log('one')
}

function printTwo()  {
    console.log('two')
}

function printThree()  {
    console.log('three')
}

setTimeout(printOne, 1000)
setTimeout(printTwo, 0)
printThree()


