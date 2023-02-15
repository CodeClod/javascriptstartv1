console.log("jeg er i setbackgroundcolor")

const inp = document.querySelector(".inpColor")
console.log(inp)

const pbCol = document.querySelector(".pbSetColor")
console.log(pbCol)

const colpicker = document.querySelector(".colpicker")
console.log(colpicker)

function setBackGrColor(e) {
    const bdy = document.querySelector("body");
    let col = inp.value;
    console.log(col)
    bdy.style.backgroundColor = col
}

function setBackgroundColorPicker(e) {
    const bdy = document.querySelector("body");
    let col = colpicker.value;
    bdy.style.backgroundColor = col;
}

//pbCol.addEventListener('click',setBackGrColor)
//inp.addEventListener('keyup',setBackGrColor)

colpicker.addEventListener('input', setBackgroundColorPicker)