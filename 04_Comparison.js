console.log("2">1);
console.log("2"<8);
// when ever you compare data , make sure the data type is same..
// As typescript does not allow you to compare different type )

console.log(null > 0);      // false 
console.log(null == 0);      // false 
console.log(null >= 0);      // true 
// The reason is that an equality check == and comparison > < <= >= work differently..

// comparison treats null as 0 

console.log("2"=== 2); //strict checking

console.log(undefined  > 0);         // false 
console.log(undefined  == 0);       // false 
console.log(undefined  >= 0);      // false 
   

