/**
 * Created by UCHATNU on 5/21/2016.
 */

//create a studentModule for making private


(function(con){

    var studentModule =  (function(){

        //private variables and methods
        var _marks=[12,13,14,15];
        var _info={
            name:"Nuwan Chathuranga",
            age:100
        }

        function _setMarks(mark){
            _marks.push(mark);
            console.log(_marks)
        }

        //public expose functions in private area
        function echo(msg){
            console.log(msg);
        }
        function setMarksPub(marks){
            _setMarks(marks)
        }

        return{
            //public area
            echo:echo,
            setMarksPub:setMarksPub

        }

    })();




        con.log(studentModule.echo("Test echo"));
        con.log(studentModule.setMarksPub(10000));



})(console);









