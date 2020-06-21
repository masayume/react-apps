const o = new Object()
o.firstName = "Marco"
o.lastName = 'Corradini'
o.isLearning = true
o.greet = function() {
    console.log('hi')
}

const o2 = {}  // new object
o2.firstName = "Marco"
o2['lastName'] = 'Corradini'
const key = "isLearning"
o2[key] = true
o2['greet'] = function() {
    console.log("ciao")
}

const o3 = {
    firstName: "Marco",
    lastName: 'Corradini',
    isLearning: true,
    greet: function() { console.log('nihao') },
    address: {
        street: 'via Cattoni',
        number: 6,
    },
}

o3.address

o3.address.number

