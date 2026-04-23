let mydate = new Date(23);
// console.log(mydate.toISOString());                  
// console.log(mydate.toJSON());                      //1970-01-01T00:00:00.023Z
// console.log(mydate.toLocaleString());             //1/1/1970, 12:00:00 AM
// console.log(mydate.toDateString());              // Thu Jan 01 1970
// console.log(typeof mydate );                    // object 
 

let myCreatedDate = new Date (23 , 4 , 2026);
// console.log(myCreatedDate.toDateString());


let myCreatedDateTwo = new Date (23 , 4 , 2026 , 3, 17 );
// console.log(myCreatedDate.toLocaleString());                    // 11/15/1928, 12:00:00 AM
 
let mytimestamp = Date.now();
// console.log(mytimestamp);                     // long digit aagye Hai ..


// console.log (myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newdate = new Date();
// console.log(newdate);

console.log(newdate.getMinutes());
console.log(newdate.getTime());
console.log(newdate.getMonth()+1);


console.log(newdate.getHours);

newdate.toLocaleString();
newdate.toLocaleString('default ', {
    weekday : "long ",})
console.log(newdate);