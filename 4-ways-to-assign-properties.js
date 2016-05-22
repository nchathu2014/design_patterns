/**
 * Created by UCHATNU on 5/22/2016.
 */

//=============== Create Properties in 4-ways =====================

var obj={};

obj.firstName="Nuwan"; // method-1
obj["lastName"]="Chathuranga"; // method-2

Object.defineProperty(obj,"country",{ //method-3
     value:"USA"
});

Object.defineProperties(obj,{  // method-4
    marks:{
        value:90
    },
    twitter:{
        value:"ntweet"
    }
});







console.log("First Name : "+obj["firstName"]);
console.log("Last Name : "+obj.lastName);
console.log("Country : "+obj.country);
console.log("Twitter : "+obj.twitter);
console.log("Marks : "+obj.marks);
