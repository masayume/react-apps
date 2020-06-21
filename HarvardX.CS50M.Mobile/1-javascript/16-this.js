const person = {
    name: 'jordan',
    greet: function() { console.log('hello, ' + this.name) },
}
person.greet()

const friend = {
    name: 'david',
}

friend.greet = person.greet

friend.greet()

const greet = person.greet.bind({name: 'this is a bound object'})

greet()     // now this is a global object, so there is an undefined error as name is not defined

// bind returns a new function
// call and apply immediately call a function

person.greet.call({name: 'bound'})
person.greet.apply({name: 'bound'})

const newPerson = {
    name: 'newPerson',
    greet: () => { console.log('hi, ' + this.name) } // still a global object
}

