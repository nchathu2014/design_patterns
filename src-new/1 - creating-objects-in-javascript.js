/**
 * There are four-ways to create an objects in javascript
 */

(function(){
    //method-1 -> Object Literal method

    var studentObj = {
        id:100,
        name:"Nuwan"
    };
    console.log(studentObj);
})();

(function(){
    //method-2 -> Constructor function
    function Student(){
        this.id=100;
        this.name="Nuwan";

    }
    console.log(new Student());
})();

(function(){
    //method-3 -> Object.create(Object.prototype)
    var studentObj = Object.create(Object.prototype);
    studentObj.id=1001;
    studentObj.name="Nuwan";
    console.log(studentObj);
})();

(function(){
    //method-4 -> Object -> **** Not recommended ****
    var student = new Object();
})();


