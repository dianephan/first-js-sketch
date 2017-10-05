//Diane Phan 
//Workshop 1 October 3, 2017

/**
color picker
http://www.rapidtables.com/web/color/color-picker.htm
**/

function setup() {
    createCanvas(500, 500);
    background(228, 242, 255);
    //if using transparencies, put things into the set up
}

function draw() {
    noStroke();
    fill(69, 229, 235); //cyan 
    textSize(40);
    text("d r e a m", 245, 260);
    textStyle(ITALIC);
    
    //textFont('Arial', 20); 
    noStroke();
    fill(213, 207, 240, 255); //light purple
    //go clockwise direction
//    text("100, 100", 100, 100);
//    text("400, 400", 400, 400);
//    text("100, 400", 100, 400);
    triangle(175, 167, 195, 145, 170, 141);
    triangle(344, 406, 365, 402, 359, 421);

    
    //gold triangles 
    fill(255, 236, 154, 255); 
    triangle(212, 140, 217, 123, 198, 123);
    
    //blue lines
    strokeWeight(2);
    stroke(207, 232, 245, 255);
    line(164, 329, 183, 420);
    line(140, 340, 222, 408);


    //triangle(220, 195, 195, 120, 220, 200); //+20

    //fill(238, 216, 234); //pink 
    //triangle(194, 114, 400, 400, 300, 300);
    
    //pink lines
    strokeWeight(2);
    stroke(238, 216, 234); //pink 
    line(300, 400, 200, 156);
    line(280, 395, 190, 170);
    line(165, 244, 229, 373);
    line(212, 361, 464, 236);
    line(165, 245, 382, 118);
    line(167, 216, 352, 105);
    line(166, 230, 367, 110);
    line(381, 116, 463, 275);
    line(280, 395, 454, 305); //diagonal horizontal 

    noStroke();
    fill(255);
    //x y width height 
    rect(150, 440, 480, 50); //bottom right 
    rect(50, 120, 50, 475); //left rect 
    rect(50, 10, 500, 50); //top rect
    
    //white lines 
    strokeWeight(2);
    stroke(255);
    //upper lines 
    line(50, 70, 500, 70);
    line(50, 75, 500, 75);
    line(50, 78, 500, 78);
    line(50, 86, 500, 86);
    //left lines 

    
    noFill();
    strokeWeight(2);
    stroke(207, 208, 209)
    ellipse(315, 250, 300, 300);
    arc(180, 378, 80, 85, 0, PI+HALF_PI); 
    arc(140, 420, 30, 30, 0, PI+HALF_PI); 

    
}