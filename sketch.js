function setup(){
    createCanvas(400, 400);
}
function draw(){
    background(0);
    let hr = hour();
    let min = minute();
    let sec = second();

    fill(255);
    noStroke();
    text(hr + ':' + min + ':' + sec, 10, 200);
}
