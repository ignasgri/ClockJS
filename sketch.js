function setup(){
    createCanvas(400, 400);
    angleMode(DEGREES);
}
function draw(){
    background(0);
    translate(200, 200);
    rotate(-90);

    let hr = hour();
    let min = minute();
    let sec = second();

    strokeWeight(8);
    stroke(255, 100, 150);
    noFill();
    let endsec = map(sec, 0, 60,0 ,360);
    arc(0, 0, 300, 300, 0, endsec);

    stroke(150, 100, 255);
    let endmin = map(min, 0, 60,0 ,360);
    arc(0, 0, 280, 280, 0, endmin);

    stroke(150, 255, 100);
    let endhr = map(hr % 12, 0, 12, 0 ,360);
    arc(0, 0, 260, 260, 0, endhr);
    // fill(255);
    // noStroke();
    // text(hr + ':' + min + ':' + sec, 10, 200);
}
