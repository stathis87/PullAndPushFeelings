///////////////////////////// STATHIS ////////////////////////////////////////

// #2

let sketch2 = function (s) 
{
   
    s.setup = function() 
    {
        // create canvas
        let cnv = s.createCanvas(s.windowWidth, s.windowHeight);
        cnv.position(0, 0);
        cnv.parent("cnv2");
    };

   
   
    s.draw = function()
    { 
        s.background(30);
    };
}

new p5(sketch2);

// #4

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
