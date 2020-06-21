// higher order functions: map(), filter(), reduce()

function map(arr, fn) {
    const newArr = []

    /*
    for (i = 0; i < arr.length; i++ ) {
        let val = arr[i]
        newArr.push(fn(val))
    }
    */

    arr.forEach(function(val) {
        newArr.push(fn(val))
    })
        
    return newArr
}

function addOne(num) {
    return num + 1
}

const x = [1, 2, 3, 4]

console.log(map(x, addOne))
