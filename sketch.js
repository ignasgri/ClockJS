function setup(){
    createCanvas(400, 400);
    angleMode(DEGREES);
}
function draw(){
    background(0);
    let hr = hour();
    let min = minute();
    let sec = second();

    strokeWeight(4);
    stroke(255, 100, 150);
    noFill();
    let end = map(mouseX, 0, width,0 ,360);
    arc(200, 200, 300, 300, 0, end);

    fill(255);
    noStroke();
    text(hr + ':' + min + ':' + sec, 10, 200);
}
