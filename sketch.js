let sketch1 = function (s) 
{
    s.setup = function() 
    {
        let cnv = s.createCanvas(s.windowWidth, s.windowHeight);
        cnv.position(0, 0);
        cnv.parent("cnv1");
        console.log(s);
    };

    s.draw = function()
    {
        s.background(0);
    };
}

new p5(sketch1);

/////////////////////////////////////////////////////////////////////

let sketch2 = function (s) {
    s.setup = function() 
    {
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
