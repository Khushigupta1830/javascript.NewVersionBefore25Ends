function SayMyName(){
    console.log("K");
    console.log("H");
    console.log("U");
    console.log("S");
    console.log("H");
    console.log("I");
    
    
}
SayMyName()


function addTwoNumber(number1 , number2){
    //console.log(number1 + number2);            // console print krne ka mtlb ye nhi ki wo ye value return bhi kr rha hai ,console and result dono alag chiz hai  
       // let result = number1+number2 ;          // output will be Result : 42 

       // return result                 // yad rkhna return ke baad kch bhi print nhi hoga ..    
       return number1+number2              /// rather than using more variable we use here the return keyword..        
} 


const result = addTwoNumber(24 , 18);
console.log("Result :" + result);        // it comes out to be undefined..
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function loginusername(username ="sam"){
    if(username === undefined){
        console.log("Please enter a username ") ;
        return
      }
    return `${username} just logged in `
 }

//console.log(loginusername("Hitesh sir "));

//console.log(loginusername(""));                          // just logged in 
console.log(loginusername(""));                          // undefined just logged in 
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++