// We can also extend the native implementation of Set if we wanted to do something
// like log on addition or create new methods

class MySet extends Set {
    constructor(arr) {
      super(arr)                // invokes the default javascript Set class constructor
      this.originalArray = arr  // just stores a reference 
    }
  
    add(val) {
      super.add(val)
      console.log(`added ${val} to the set!`)   // as the original add but with console.log
    }
  
    toArray() {
      return Array.from(this)   // returns an array
    }
  
    reset() {
      return new MySet(this.originalArray)  // returns the original set
    }
  }
  
  const s = new MySet([1,2,3,4,5])
  s.add(6)
  s.add(7)
  console.log(s.toArray())
  
  const reset = s.reset()
  console.log(reset.toArray())
  