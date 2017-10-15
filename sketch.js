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
    
    push();
    rotate(endsec);
    stroke(255, 100, 150);
    line(0, 0, 100, 0);
    pop();

    stroke(150, 100, 255);
    let endmin = map(min, 0, 60,0 ,360);
    arc(0, 0, 280, 280, 0, endmin);

    push();
    rotate(endmin);
    stroke(150, 100, 255);
    line(0, 0, 75, 0);
    pop();

    stroke(150, 255, 100);
    let endhr = map(hr % 12, 0, 12, 0 ,360);
    arc(0, 0, 260, 260, 0, endhr);

    push();
    rotate(endhr);
    stroke(150, 255, 100);
    line(0, 0, 50, 0);
    pop();

    strokeWeight(2);
    stroke(255);
    ellipse(0, 0, 10, 10);
    // fill(255);
    // noStroke();
    // text(hr + ':' + min + ':' + sec, 10, 200);
}
