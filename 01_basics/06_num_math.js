const score = 400 ;                // ye phle se he number hai maan liya hai...

console.log(score);

const balance = new Number(100) ;            // specially caste that its a number...
                                         
console.log(balance); 
console.log(balance.toString());        // here the number is converted to string type
                                          //and hence in string type we know 
                               // there is a lot of propery..
console.log(balance.toFixed(4));

const othernumber = 12.8933 ;
console.log(othernumber.toPrecision(2));   // use toPricision keyword very attentively while coding as it / carryfully 

const hundreds = 10000000

console.log(hundreds.toLocaleString('en-IN')); // CONVERT TO comma in indian rupees



