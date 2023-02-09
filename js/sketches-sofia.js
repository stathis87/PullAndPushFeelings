///////////////////////////// SOFIA ////////////////////////////////////////

// #1
let sketch1 = function (s) 
{
    let points = [];
    let pointsX = [];
    let nPoints;

    const nIter = 30;
    const offset = 70;

    s.setup = function() 
    {
        // create canvas
        let cnv = s.createCanvas(s.windowWidth, s.windowHeight);
        cnv.position(0, 0);
        cnv.parent("cnv1");

        s.strokeWeight(50);
        s.stroke(255,255,255, 7)
        
        generateColor();
        generatePoints();
        generateLines();
        drawText();
    };

    generateColor = function()
    {
        let color = [];
        color.push(s.random(100, 200));
        color.push(s.random(60, 100));
        color.push(s.random(90, 210));
        s.background(color[0], color[1], color[2]);
    };

    generatePoints = function()
    {
        nPoints = s.random(8, 15);

        pointsX = [];
        points  = [];

        // random points
        for(let i = 1; i < nPoints; i++)
            pointsX.push(s.random(0, s.width));

        // sort in ascending order
        pointsX.sort((a,b)=>a-b);

        // alternate height
        for(let i = 0; i < nPoints; i++)
            i%2 == 0 ? points.push([pointsX[i], s.height]) : points.push([pointsX[i], 0]);
    }

    generateLines = function()
    {
        for(let j = 0; j < nIter; j++)
        {
            let lastX = points[0][0] + s.random(-offset, offset);
            let lastY = points[0][1];
            
            for(let i = 1; i < nPoints; i++) {
                let x0 = lastX;
                let y0 = lastY;
                let x1 = points[i][0] + s.random(-offset, offset);
                let y1 = points[i][1];
                
                s.line(x0, y0, x1, y1);

                lastX = x1;
                lastY = y1;
            }
        } 
    }

    drawText = function()
    {
        s.push();
        s.noStroke();
        s.fill(255);
        s.textSize(20);
        s.textAlign(s.CENTER);
        s.text('click me', s.width/2, s.height/2);
        s.pop();
    }

    s.mouseClicked = function()
    {
        generateColor();
        generatePoints();
        generateLines();
        drawText();
    };

    s.draw = function()
    { };
}

new p5(sketch1);

// #3

let sketch3 = function (s) {

    let rose;
    let petal_1;
    let petal_2;
    let petal_3;
    let petal_4;
    let petal_5;
    let petal_6;
    let petals;

    s.preload = function()
    {
        rose    = s.loadImage("pngs/sofia/rose/rose.png");
        petal_1 = s.loadImage("pngs/sofia/rose/petal-1.png");
        petal_2 = s.loadImage("pngs/sofia/rose/petal-2.png");
        petal_3 = s.loadImage("pngs/sofia/rose/petal-3.png");
        petal_4 = s.loadImage("pngs/sofia/rose/petal-4.png");
        petal_5 = s.loadImage("pngs/sofia/rose/petal-5.png");
        petal_6 = s.loadImage("pngs/sofia/rose/petal-6.png");
    };

    s.setup = function() 
    {
        // create canvas
        let cnv = s.createCanvas(s.windowWidth, s.windowHeight);
        cnv.position(0, 0);
        cnv.parent("cnv3");

        s.imageMode(s.CENTER);
        // array 
        petals = [petal_1, petal_2, petal_3, petal_4, petal_5, petal_6];

        rose.resize(s.width*0.07, 0)
    };

    s.draw = function()
    {
        s.background(200);

        s.image(rose, s.mouseX, s.mouseY);
        s.noCursor();
        //s.cursor(rose);
    };

}

new p5(sketch3);
