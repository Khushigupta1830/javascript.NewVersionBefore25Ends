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

console.log(regularUser);                        // fullname: { username: { firstname: 'khushi', lastname: 'gupta' } }
console.log(regularUser.fullname);
                                                 //{ username: { firstname: 'khushi', lastname: 'gupta' } }

