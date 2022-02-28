let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 1000;
cnv.height = 500;

let bubble = {x: 400, y: 300, r: 25}

requestAnimationFrame(draw);

function draw(){
    fill("blue");
    circle(bubble.x, bubble.y , bubble.r, "fill");
    requestAnimationFrame(draw);
    
}

