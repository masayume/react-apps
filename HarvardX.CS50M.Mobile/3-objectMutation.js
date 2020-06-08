const o = {
    a: 'a',
    b: 'b',
    obj: {
        key: 'key',
    },
}

const o2 = o    // o2 is a reference to o

o.a = 'new value'

console.log(o2.a)  // as o2 is a reference, the value is the one in o.a

const o2a = Object.assign({}, o) // brand new object with values and keys of the old (o) 
                                // "shallow copy" (copies keys, values but NOT object)

// deep copy

function deepCopy(obj) {
    const keys = Object.keys(obj)
    const newObject = {}

    for (let i = 0; i < keys.length; i++) {
        // if it's an object, copy it
        const key = keys[i]
        if (typeof obj[key] === 'object') {
            newObject[key] = deepCopy(obj[key])
        } else {
            newObject[key] = obj[key]
        }
    }

    return newObject
}

const o3 = deepCopy(o)

o.obj.key = 'new key!'
console.log(o3.obj.key)

