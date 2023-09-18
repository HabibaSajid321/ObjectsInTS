// objects in typescript 
// two ways to declare an object 
//         => constructor => literal
// singolten in case of constructor

//                              topic 1:  using object literals

type Userdata = {
    username:string;
     age:number;
      member:boolean;
      email:string;
      greeting: (x:string)=>string;
     
    };
const TsUser:Userdata = {
    username :"habiba",
    age : 16,
    member : false,
    "email":"habibachudhary4342gmail.com",}

    

//`                                     Topic 2: to access data from objects 

// method 1
console.log(`Username:${TsUser.username}`);

// method 2 
console.log(`Username:${TsUser["username"]}`);

// recommended method
// in case I want to access email which I have declared as a string . notation cannot get this so braces[] notation is preffered.
// in an other case like if I want to access symbol then . notation is not recommended we should use [ ] notation.
console.log(`email:${TsUser["email"]}`);

//                                    topic 3: How to change objects value

TsUser.email = "khizrasajid678@gmail.com";
// this will change the emial
console.log(`email:${TsUser["email"]}`);

//                                  topic 4: How to lock values

// we can freeze the object if we dont want the values to be changed.

// Object.freeze(TsUser)

// now the email cannot be changed. 
// we can also freeze the whole object
TsUser.email = "Wajeeha@gmail.com";

console.log(TsUser["email"]);


//           topic 5 : using function with objects.

TsUser.greeting(){
    console.log();
    
}








  