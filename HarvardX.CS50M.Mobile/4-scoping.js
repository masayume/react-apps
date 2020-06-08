// scope: variable lifetime

// var          lexical scoping: from the declaration until when their function ends
// const, let   block scoping: untile the next } is reached

// console.log(thisIsALet) // error undeclared

thisIsHoisted() // I can call a function before its declaration ("hoisting")

const thisIsAConst = 50

// thisIsAConst++ // error!

// constObj.a = 'a'

let thisIsALet = 51
thisIsALet = 50

// let thisIsALet = 51  // this is an error (redeclare) !

var thisIsAVar = 50
thisIsAVar = 51
var thisIsAVar = 51     // this is also OK, also vars are hoisted (can be usable before)

console.log(thisIsAVar)

function thisIsHoisted() {
    console.log(this is a function declared at the bottom of a file)
}

const thisIsNotHoisted = function() {
    console.log('should this be hoisted ?')
}