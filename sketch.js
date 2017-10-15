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
    let endsec = map(sec, 0, 60,0 ,360);
    arc(200, 200, 300, 300, 0, endsec);

    let endmin = map(min, 0, 60,0 ,360);
    arc(200, 200, 280, 280, 0, endmin);

    let endhr = map(hr, 0, 24,0 ,360);
    arc(200, 200, 260, 260, 0, endhr);
    // fill(255);
    // noStroke();
    // text(hr + ':' + min + ':' + sec, 10, 200);
}
