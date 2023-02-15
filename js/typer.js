// der er 7 primitive typer i javascript
// Number String Boolean
// Undefined Null
// Symbol og BigInt .. dem bruger vi ikke

// der er ydeligere 2 typer
// object function

function showTypes(lst) {
    console.log("Starter UDSKRIVNING")
    for (const obj of lst) {
        console.log(obj + " er af typen: " + typeof obj)
    }
}


const a = 5.5
const arr = []
arr.push(a)
arr.push(0/0)
arr.push(6>2)
arr.push(null)
showTypes(arr)
console.log(arr[1])






