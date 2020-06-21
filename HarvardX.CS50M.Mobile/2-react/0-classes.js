const d = new Date()

console.log(d)

console.log(Date.now())     // static method (doesn't care about which instance)

console.log(d.toString())     // static method (doesn't care about which instance)

// keywords: new (instance), constructor, extends, super, 

const d2 = new Date(1234)       // milliseconds after date 0

console.log(d2.toString())     

