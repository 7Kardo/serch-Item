
function randNum(){
    return Math.floor(Math.random()*256);
}
function randColor(){
    return `rgb(${randNum()} ,${randNum()} ,${randNum()})`;
}
function changeColor(){
    return document.body.style.backgroundColor = randColor();
}
