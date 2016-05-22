/**
 * Created by UCHATNU on 5/21/2016.
 */

//create a studentModule for making private


var studentModule =  (function(){

    //private variables and methods
    var marks=[12,13,14,15];
    var info={
        name:"Nuwan Chathuranga",
        age:100
     }

    function setMarks(mark){
        marks.push(mark);
        console.log(marks)
    }

    return{
        //public area
        echo:function(msg){
            console.log(msg);
        },
        setMarksPub:function(marks){
            setMarks(marks)
        }
    }

})();

console.log(studentModule.echo("Test echo"));
console.log(studentModule.setMarksPub(10000));



