//Diane Phan 
//Workshop 1 October 3, 2017

function setup() {
    createCanvas(500, 500);
    background(228, 242, 255);
    //if using transparencies, put things into the set up
}

function draw() {
    noStroke();
    fill(69, 229, 235); //cyan 
    text("s n o w g l o b e", 315, 250);
    //textFont('Arial', 20); 
    noStroke();
    fill(213, 207, 240, 255); //light purple
    //go clockwise direction
//    text("100, 100", 100, 100);
//    text("400, 400", 400, 400);
//    text("100, 400", 100, 400);
    
    
    triangle(175, 167, 195, 145, 170, 141);
    //triangle(220, 195, 195, 120, 220, 200); //+20

    fill(238, 216, 234); //pink 
    triangle(194, 114, 400, 400, 300, 300);
    strokeWeight(2);
    stroke(238, 216, 234); //pink 
    line(300, 400, 200, 156);
    line(280, 395, 190, 170);
    
    //stroke(63, 92, 121, 255); //navy
    line(280, 395, 454, 305); //diagonal horizontal 


    
    noStroke();
    fill(255);
    //x y width height 
    rect(150, 425, 480, 50); //bottom right 
    rect(50, 120, 50, 475); //left rect 
    rect(50, 20, 500, 50); //top rect
    
    noFill();
    strokeWeight(2);
    stroke(207, 208, 209)
    ellipse(315, 250, 300, 300);

    
}