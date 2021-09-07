var rect = require('./rectangle');

function solveRect(a,b)
{
    console.log('Solving for rectangle with l='+ a+ " and b="+b);

    if(a<=0 || b<=0){
        console.log('Rectangle dimesnsions dimensions should be greater that Zero');
    }else
    {
        console.log('The area of the rectangle is :' +rect.area(a,b));
        console.log('The perimeter of the rectangle is :' + rect.perimeter(a,b));
    }
}

solveRect(2,4);
solveRect(3,5)
solveRect(0,5);
solveRect(-3,5);