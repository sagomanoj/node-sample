// var rect = {
//     perimeter :(x,y)=> (2*(x*y)),
//     area : (x,y)=> (x*y)
// };


module.exports = (x,y,callback)=>{

   if( x<=0 || y<=0)
   {
       setTimeout(()=>callback(new Error(
           'Rectangle dimesnsions dimensions should be greater that Zero l= ' + x + ' and b = '+ y),
           null),
           2000);
   }
   else{
       setTimeout(()=>
          callback(null,
                {
                    area :()=> (x*y),
                    perimeter :()=> (2*(x*y))
                }),
        2000);
   }

}

// exports.perimeter = (x,y)=> (2*(x*y));
// exports.area = (x,y)=> (x*y);