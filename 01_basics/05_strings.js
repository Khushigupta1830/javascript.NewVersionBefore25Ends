const name ="khushi"  
const repocount = 45
// console.log(name +  repocount + "value");

// backtick ... playfolders jahn hm inject krte hai hamare variables 
console.log(`hello my name is ${name}  and my repo count is ${repocount}`);

//  how to define a string  , 
const gamename = new String('khushi-GP')    

// console log mei jaakr ke hm dekh sakte hai that it forms,
//  [0] 'h'
// [1] 'i'
// [2] 't'
// [3]'e'
// [4]'s'
 console.log(gamename[0]);
 console.log(gamename[1]);
 console.log(gamename[2]);
 console.log(gamename[3]);
 console.log(gamename[4]);
 console.log(gamename[5]);
 console.log(gamename.__proto__);     /*gives {}  */
 console.log(gamename.length);          /*gives length  */
 console.log(gamename.toUpperCase()) ;
 console.log(gamename.toLowerCase());
 console.log(gamename.charAt(`3`));         // indexing start with zero not one //
 console.log(gamename.indexOf(`c`));
 
           
 
 const newstring = gamename.substring(0,4)    // newstring is here new variable..// dont use negative number 
                                                 
                                                // index shuru hota h 0 se and goes till 4 but 4th positio wala number print nhi hota hai
 console.log(newstring);

 const anothername = gamename.slice(-8 ,4)

 console.log(anothername);
 

 const newStringOne = "    khushi    ";

console.log(newStringOne);                    // space in output 
console.log(newStringOne.trim());             // no spcae in output

const url ="https://khushigupta%202004"
console.log(url.replace('%20' , '-'));       // replace the owrld with another word 


console.log(url.includes('khushi')) ;