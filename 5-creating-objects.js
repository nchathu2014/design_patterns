/**
 * Created by UCHATNU on 5/22/2016.
 */

// =========================== method-1
var obj={

    id:100,
    name:"Nuwan",

    getInfo:function(){
        return this.id+" "+this.name;
    }

};

console.log(obj.getInfo());


// ============================ method-2

var obj1=new Object();
obj1.id=101;
obj1.name="Nuwan Chathuranga";
obj1.getInfo=function(){
    return obj1.id+" "+obj1.name;
}

console.log(obj1.getInfo());


// ============================ method-3 (similar to method 4)

function Person(){

    this.id=102;
    this.name="Don Nuwan Chathuranga";
    this.getInfo=function(){
        return this.id+" "+this.name;
    }
};

var person = new Person();
console.log(person.getInfo());

// ============================ method - 4 (similar to method 3)

var person = new function(){

    this.id=103;
    this.name="Don Nuwan Chathuranga Thuduwage";
    this.getInfo = function(){
        return this.id+" "+this.name;
    }
};

console.log(person.getInfo());


// ============================= method - 5

var person1 = Object.create({

    id:104,
    firstName:"Dasuni",
    lastName:"Chathuranga",
    getInfo:function(){
        return this.id+" "+this.firstName+" "+this.lastName;
    }
});

console.log(person1.getInfo());


