/**
 * Created by UCHATNU on 5/22/2016.
 */


(function(win,$){

    var PersonSingleton = (function(){

        var instance;

        function _createInstance(){

            var person={}; // best practice is to use this comparatively person = new Object();

            function getPersonInfo(){
                return person.getInfo();
            }

            function createPerson(id,name){

               // person = new Object();
                person.id=id;
                person.name=name;

                person.getInfo = function(){
                    return person.id+" "+person.name;
                }
            }

            return {
                createPerson:createPerson,
                getPersonInfo:getPersonInfo
            }
        }

        return{

            getInstance:function(){
                if(!instance){
                    instance=_createInstance();
                }

                return instance;
            }
        }

    })();

    $(document).ready(function(){
        $('#btnAgain').click(function(){

            var person = PersonSingleton.getInstance();
                person.createPerson(1000,"Nuwan Chathuranga");
                console.log(person.getPersonInfo());

            var person1 = PersonSingleton.getInstance();
            person.createPerson(1001,"DON Nuwan Chathuranga");
            console.log(person1.getPersonInfo());

        });
    });


})(window,jQuery);


//initial code
/*$(document).ready(function(){
    $('#btnAgain').click(function(){

        function Person(id,name){
            this.id=id;
            this.name=name;

            this.getInfo=function(){
                return this.id+"--"+this.name;
            }

            this.print=function(msg){
                console.log(JSON.stringify(msg));
            }

        }
        var person = new Person(100,"Nuwan");
         person.print(person.getInfo())


    });
});*/
