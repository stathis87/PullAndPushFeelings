////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// SKETCH 2 ///////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

let sketch2 = function(s) 
{
      
    let flowers = [];
   
    s.setup = function() 
    {
        // create canvas
        let cnv = s.createCanvas(s.windowWidth, s.windowHeight);
        cnv.position(0, 0);
        cnv.parent("cnv2");

        
    };

   
   
    s.draw = function()
    { 
        s.background(0);
        for (let i = 0; i < flowers.length; i++) {
            flowers[i].display(s);
          }
          drawTextSketch2();
    };

    s.mousePressed = function() {
        flowers.push(new Flower(s.mouseX, s.mouseY, s));
    }

    drawTextSketch2 = function() {
        s.push();
        s.noStroke();
        s.fill(255);
        s.textSize(20);
        s.textAlign(s.CENTER);
        s.text('click again', s.width/2, s.height/2);
        s.pop();
    }


}

new p5(sketch2);

class Flower {
    constructor(x, y, s) {
      this.x = x;
      this.y = y;
      //shape
      this.rs = s.random(20, 100); //radius of the shape
      this.n = s.random(20, 70); //number of shapes
      this.angle = s.random(0, s.TWO_PI);
      this.d = s.random(20, 100);
      //colour
      this.r = s.random(100, 200);
      this.g = s.random(60, 100);
      this.b = s.random(90, 210);
      this.a = s.random(20,40);
    }
  
    display(s) {
      s.push();
      s.translate(this.x, this.y);
      for (let i = 0; i < this.n; i++) {
        let x = this.rs * s.cos(this.angle);
        let y = this.rs * s.sin(this.angle);
        s.noStroke();
        s.fill(this.r, this.g, this.b, this.a);
        s.ellipse(x, y, this.rs, this.n);
        this.angle += this.n;
      }
      s.pop();
    }
  }

////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// SKETCH 4 ///////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

let sketch4 = function (s) {
    s.setup = function() 
    {
        let cnv = s.createCanvas(s.windowWidth, s.windowHeight);
        cnv.position(0, 0);
        //cnv.parent("cnv4");
    };

    s.draw = function()
    {
        s.background(30);
    };

}



//new p5(sketch4);
