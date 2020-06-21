// callbacks  execute function once asyncronous call returns value, the program doesn't have to halt and wait for that value


function doSomethingAsync(callback) {

    // console.log(callback(1))
    callback(1)
} 

function doSomethingElseAsync(callback) {
    setTimeout(function() {callback(1)}, 1000)
}

/*  real code example
function login(req, res, callback) {
    User.findOne({email: req.body.email}, function(err, user) {
        if (err) return callback(err)

    user.comparePassword(req.body.password, (err, isMatch) => {
        if (err) return callback(err)
        if (!isMatch) return res.status(401.send('Incorrect password')
    const payload = {id: user._id, email: user.email}
    ...

*/        
    
doSomethingAsync(console.log)
doSomethingElseAsync(console.log)
