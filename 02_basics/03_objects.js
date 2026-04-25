// OBJECTS  TREATED AS >>> LITERALS  , CONSTRUCTOR ....  


//jab bhi hum literals ki tarah declare krte hai to singleton nhi banta ..
// ..
// IF WE MAKE BY CONSTRUCTOR TOH YES BANEGA ..


const jsuser={}
//console.log(jsuser);

const jsuser2 = {
    name : "khushi " ,
    age : 18 ,
    location : "Ranchi",
    email : "khushigupta@google.com",
    
     inLoggedin : "false " ,
     lastLoginDate : ["monday " , "saturday "]

}
jsuser2.email = "saksham1824@gmail.com"

   //Object.freeze(jsuser2)
   jsuser2.email = "saksham@gmail.com"
  // console.log(jsuser2.email);


  //console.log(jsuser2.email)             // khushigupta@google.com
 // console.log(jsuser2[email])              /* will nott work because , 
                                           // there is consider to be string form ..
                                                                                   
 //console.log(jsuser2["email"])          //khushigupta@google.com

 // ques>> Take a symbol add it object keys and print it ?    (interview )
                                      // take symbol , define it in for of keys 
const mysum = Symbol("key1") 

const jsuser3= {
    [mysum]: "mykey1" ,               // define it in for of keys 
    age : 18 ,
     //mysum :("key1")
 }

 console.log(jsuser3);
 console.log(typeof[mysum]);

 // console.log(jsuser3[mysum]);
//    const jsuser4=  {
//  jsuser4.email= "khushi@google.com" ,
//  Object.freeze(jsuser4) ,
//  jsuser4.email= "khushi1890@google.com" ,
//    }
//  console.log(jsuser4);


 
jsuser2.greeting = function(){
    console.log("Hello Js user ") ;             //   Hello Js user    

console.log(jsuser.greeting);                   //[Function (anonymous)]

console.log(jsuser2.greeting());   

   jsuser.greetingtwo = function(){
    console.log('Hello js user , $ {this.name}');

   }                             //defined
 
        //  console.log(jsuser2.greetingtwo());

  

} 
  console.log(jsuser2.greetingtwo());
  