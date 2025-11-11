const score = 400 ;                // ye phle se he number hai maan liya hai...
// 
// console.log(score);

const balance = new Number(100) ;            // specially caste that its a number...
                                         
// console.log(balance); 
// console.log(balance.toString());        // here the number is converted to string type
                                          //and hence in string type we know 
                               // there is a lot of propery..
// console.log(balance.toFixed(4));

const othernumber = 12.8933 ;
// console.log(othernumber.toPrecision(2));   // use toPricision keyword very attentively while coding as it / carryfully 

const hundreds = 10000000

// console.log(hundreds.toLocaleString('en-IN')); // CONVERT TO comma in indian rupees

  //                          local number mei isko print krega as indian 
//_+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math);             // object [math] {}
// console.log(Math.abs);              // neg to positive..

// console.log(Math.round(9.7));     // round off krta hai number ka..
// console.log(Math.ceil(9.7));       // upper number 
// console.log(Math.floor(9.7));       // lower number 
// console.log(Math.min(9,8, 7, 6 , 5 , 4));          // array mei check krta hai that minimum number 
// console.log(Math.max(9, 8 , 7, 6, 5,4));           // check maximum number 
 
// console.log(Math.random());                         // output between , (0 - 1 ) 

// console.log((Math.random()*10) + 1 );              // output , should be greater than 1.. 
// console.log((Math.random()*10) + 1 );
// console.log(Math.floor(Math.random()*10) + 1 );     // we used the math floor to wrap up for the min number /// min floor hme zero e skta h but at the end we do + 1..


const min  = 87                                            // for minimum for the given  number 

const max = 90                                             // for maximum 
 
console.log(Math.floor(Math.random()* (max - min +  1))+ min )

// Math.floor ==> single digit number milne ke liye 
//  (max - min +  1) ==> just to avoid zero As the output 
// +min ==> done , to get output more th