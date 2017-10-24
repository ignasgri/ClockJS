function setup(){
    createCanvas(180, 180);
    angleMode(DEGREES);
}
function draw(){
    background(0, 128, 0, 0);
    clear();
    translate(90,90);
    rotate(-90);

    let hr = hour();
    let min = minute();
    let sec = second();
    
    strokeWeight(4);
    stroke(255, 100, 150);
    noFill();
    let endsec = map(sec, 0, 60,0 ,360);
    arc(0, 0, 150, 150, 0, endsec);

    
    
   

    stroke(150, 100, 255);
    let endmin = map(min, 0, 60,0 ,360);
    arc(0, 0, 140, 140, 0, endmin);

    push();
    rotate(endmin);
    stroke(150, 100, 255);
    line(0, 0, 35, 0);
    pop();

    stroke(150, 255, 100);
    let endhr = map(hr % 12, 0, 12, 0 ,360);
    arc(0, 0, 130, 130, 0, endhr);

    push();
    rotate(endhr);
    stroke(150, 255, 100);
    line(0, 0, 30, 0);
    pop();

     push();
    rotate(endsec);
    strokeWeight(1);
    stroke(255);
    line(2, 0, 45, 0);
    pop();

    strokeWeight(1);
    stroke(255);
    fill(0);
    ellipse(0, 0, 5, 5);
    
    
    // fill(255);
    // noStroke();
    // text(hr + ':' + min + ':' + sec, 10, 200);
}
