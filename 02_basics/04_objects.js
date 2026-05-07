const tinderUser=new Object();
//console.log(tinderUser);                       //{}

const tinderUserTwo={}
//console.log(tinderUser);                    // {}


tinderUser.id="khushi1234" ;
tinderUser.email="khushi.gmail@com";
tinderUser.isLoggedIn=false ;
//console.log(tinderUser);                        // { id: 'khushi1234', email: 'khushi.gmail@com', isLoggedIn: false }

const regularUser={
    email:"khushi@google.com",
    fullname:{                                                    
        username:{
            firstname:"khushi" ,
            lastname:"gupta"

        }
    }
}

//console.log(regularUser);                        // fullname: { username: { firstname: 'khushi', lastname: 'gupta' } }
//console.log(regularUser.fullname);
                                                 //{ username: { firstname: 'khushi', lastname: 'gupta' } }
const obj1 ={1: "A" , 2:"B"};
const obj2 ={3: "A" , 4:"B"};
//const obj3 = Object.assign({} , obj1, obj2);    // object assign is a static method , which copies the enumeral own properties ..
const obj3 = {...obj1 , ...obj2};
console.log(obj3);                                  // spread fconcept we use here  /// const obj1 ={"1": "A" , "2":"B"};

const users = [
    {
     id : 1,
     email : "khushi@gmail.com" ,
     address : "abcde1234" ,

     
    }
]

    users[1].email
    console.log(tinderUser);

console.log(Object.keys(tinderUser));


