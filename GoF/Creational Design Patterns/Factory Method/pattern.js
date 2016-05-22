/**
 * Created by UCHATNU on 5/22/2016.
 */


(function(){


    var StudentFactory = (function(){

        this.createStudent=function(type){

            if(type=="ENG"){
                console.log("English Student")
            }else if(type=="MATH"){
                console.log("Maths Student")
            }else if(type=="SCE"){
                console.log("Science Student")
            }else{
                console.log("General Student")
            }

        }


        return{
            createStudent:createStudent
        }


    })();



    StudentFactory.createStudent("ENG");
    StudentFactory.createStudent("MATH");
    StudentFactory.createStudent("SCE");
    StudentFactory.createStudent();


})();





