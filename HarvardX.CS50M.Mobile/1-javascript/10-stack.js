// on the execution stack c() calls b() which calls a()
/*
________________
|   addOne()   |
|______________|
|   getNum()   |
|______________|
|     c()      |   ^
|______________|   |

*/


function addOne(num) {
    return num + 1
}

function getNum() {
    return addOne(10)
}

function c() {
    console.log(getNum() + getNum())   // 11 + 
}

c()

