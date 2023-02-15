let a = 5
console.log(a)

console.log("hej" + 5)
console.log(5 + "hej")

console.log("hej" - 5)
console.log(5 - "hej")

function out(s) {
    console.log(s)
}

out(("Jeg er i out" + 4)>"8")
out("jj">5)
out("jj" > "j")
out("f" >= "f")


const c = "hej"
const tst = {
    "hej" : "noget info",
    "object": "data1",
    "object2" : 5
}
const d = 5
let f = undefined;

if (c>d)  {
    out("c større end d")
}
if(c) out("c er noget")

out(c)
c.hej = "hej2"
out(c)
if (f) out("jeg er undefined")

out(tst)
tst.hej = "noget mere info"
out(tst)

let arr = [5, 5.5, "hej", 5>4, f, [1,"array2"], {"erik" : 5}, 0/0]

arr.forEach(out)
arr.forEach(s => console.log(s))

