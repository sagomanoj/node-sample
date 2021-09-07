var rect = require('./rectangle');

function solveRect(a,b)
{
    console.log('Solving for rectangle with l='+ a+ " and b="+b);
    rect(a,b,(err,rectangle)=>{
        if(err)
        {
            console.log("ERROR! " +err.message);
        }
        else{
            console.log("The area of the rectangle for the l = "+ a + " and b = "+ b + " is "+ rectangle.area());
            console.log("The Perimeter of the rectangle for the l = "+a + " and b = "+ b + " is "+ rectangle.perimeter());
        }
    }) 
    
}

solveRect(2,4);
solveRect(3,5)
solveRect(0,5);
solveRect(-3,5);