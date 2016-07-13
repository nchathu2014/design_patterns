/**
 * Created by UCHATNU on 7/13/2016.
 */

/*
var task=Object.create(Object.prototype);

task.title="My task title";
task.description="My task description";
task.getDetails = function(){
    return this.title+"--"+this.description;
}
console.log(task.getDetails());*/


var task ={
    title:"My task title",
    description:"My task description"
};

Object.defineProperty(task,"getDetails",{
    value:function(){
        return this.title+"--"+this.description
    },
    writable:false,
    enumerable:false, //when true -> Object.keys(task) show all keys
    configurable:false // if false cannot redefine the properties like below
});

Object.defineProperty(task,"getDetails",{
    enumerable:true
});

task.getDetails="hi"; // when writable = false you cannot assign value to the getDetail property
console.log(task.getDetails);
console.log(Object.keys(task));
