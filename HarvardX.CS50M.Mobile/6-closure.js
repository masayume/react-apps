// closures: functions that refer to variables declared by parent function still have access to those variables.

function makeHelloFunction() {
    const message = 'Hello!'

    function sayHello() {
        console.log(message)
    }

    return sayHello
}

const sayHello = makeHelloFunction()

console.log('typeof message: ', typeof message)
console.log(sayHello.toString)

sayHello()