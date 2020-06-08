// global object in the browser:    window;  every var etc is window.var...
// global object in node:           global;  every var, function etc is global.function...

function makeFunctionArray() {
    const arr = []

    for (var i = 0; i< 5; i++) {
        arr.push(function() { console.log(i) })
    }

    return arr

}

const arr = makeFunctionArray()

arr[0]()


