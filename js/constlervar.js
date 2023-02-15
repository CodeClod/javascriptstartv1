// der er 3 javascript keywords der bruges til tildeling af variabel

const a = 5
let b = 6
b = "hej"
// brug helst ikke var ved eksamen
var c = 5.5

console.log(a)
console.log(b)
console.log(c)

function testScope() {
    let a1 = "xjeg er lokal"
    var v1 = "jeg er lokal"
    if (a1 > v1) {
        var a2 = "a1 var større end v1"
        console.log(a2)
        if (3==3) {
            let a3 = 3
            var v3 = 3.3
            console.log("3=3")
        }
        console.log(v3) // block scope virker ikke med var  
    }

}
testScope()
//console.log(a2) Function scope virker
//console.log(a1)
//console.log(v1)