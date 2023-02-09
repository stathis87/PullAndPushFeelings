////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// SKETCH 1 ///////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

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
        cnv = s.createCanvas(s.windowWidth, s.windowHeight);
        cnv.position(0, 0);
        cnv.parent("cnv1");

        cnv.mouseClicked(mouseWasClicked);

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
        nPoints = s.random(10, 16);

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

    mouseWasClicked = function()
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


////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// SKETCH 3 ///////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

let sketch3 = function (s) {

    // time
    let delayTime = 1000; // 1 sec
    let t = 0;

    //img
    let rose;
    let petal_1;
    let petal_2;
    let petal_3;
    let petal_4;
    let petal_5;
    let petal_6;
    let petalImgs;
    let petals =[];

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
        
        // images and resizing 
        petalImgs = [petal_1, petal_2, petal_3, petal_4, petal_5, petal_6];
        for(img of petalImgs)
            img.resize(s.width*0.03, 0);

        rose.resize(s.width*0.1, 0);
    };

    s.draw = function()
    {
        s.background(80, 10, 10);
        generatePetal();
        updatePetals();

        s.image(rose, s.mouseX, s.mouseY);
        s.noCursor();

    };

    generatePetal = function()
    {
        if(s.millis() - t > delayTime && mouseInsideCanvas())
        {
            let index = s.int(s.random(0, petalImgs.length));
            let newPetal = new Petal(s.mouseX+30, s.mouseY, petalImgs[index]);
            petals.push(newPetal);
            // update time
            t = s.millis();
            delayTime = s.random(300, 1500);
        }
    }

    updatePetals = function()
    {
        for(petal of petals)
        {
            petal.updatePos(s);
            petal.draw(s);
        }
    }

    mouseInsideCanvas = function()
    {
        return (s.mouseX >= 0 && s.mouseX <= s.width && s.mouseY >= 0 && s.mouseY <= s.height);
    }
}

new p5(sketch3);


class Petal 
{
    constructor(x, y, img)
    {
        this.x = x;
        this.y = y;
        this.img = img;       
    }

    updatePos(s)
    {
        if(this.y + this.img.height/2 < s.height)
            this.y+=2;

    }

    draw(s)
    {
        s.image(this.img, this.x, this.y);
    }
}