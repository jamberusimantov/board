document.getElementsByTagName("div")[0].innerHTML = '<h1>Change Color</h1><button onclick="changeColorRandom()">Change Color</button><br><input  onmouseover="mOver" type="text" placeholder="enter 3 digits color" style="width: 40vw; height: 50px; border-radius: 20vw; font-size:large; padding:0 2vw">';
document.getElementsByTagName('div')[0].childNodes[1].style = `background:black; color:yellowgreen; width:20vw; height:50px;font-size:large;border-radius:5vw;`;
function changeColor() {
    let color = document.getElementsByTagName("input")[0].value;
    
    let div2 = document.getElementsByTagName("div")[1];
    div2.innerHTML = "<div></div><button onclick='Change2Yellow()'>Change 2 Yellow</button><br>";
    div2.childNodes[0].style = `background:#${color}; width:50vw; height:30vh; border: 2px black solid; margin:1vh 25vw;border-radius:25vw;`;
    div2.childNodes[1].style = `background:black; color:yellowgreen; width:20vw; height:50px;font-size:large;border-radius:5vw;`;
    for (let i = 0; i < 100; i++) { let randomColor = Math.floor(Math.random() * 1000); div2.innerHTML += `<div class='miniBox' onmouseover='hover(${randomColor})'></div>`; document.getElementsByClassName('miniBox')[i].style = `background:#${randomColor}; width:8vw; height:8vw; border: 2px black solid; border-radius:4vw; margin:1vh;  display: inline-block;`; }
}
document.getElementsByTagName('div')[0].childNodes[1].addEventListener("click", changeColorRandom);
document.getElementsByTagName('div')[0].childNodes[3].addEventListener("mouseover", mOver);
function changeColorRandom() { setInterval(() => changeColor(), 3000); }
function mOver() { console.log("dont be shy...");}
function Change2Yellow() { document.getElementsByTagName("div")[1].childNodes[0].style.background = "yellow"; }
function hover(param) { document.getElementsByTagName("div")[1].childNodes[0].style.background = `#${param}`; }