/**
 * Created by UCHATNU on 5/22/2016.
 */

//we are not in the global scope
(function(win,$){

    //Module/Module Reveal Design Pattern design pattern
    var StudentSingleton = (function(){

        var instance;

        function _createInstance(){
            //create instance logic

            function createObject(){
                var obj = new Object("I am a Object");
                return obj;
            }

            function echo(msg){
                console.log(JSON.stringify(msg))
            }

            return{
                createObject:createObject,
                echo:echo
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


    $(win.document).ready(function(){

        $('#btn').click(function(e){
            var ins1 = StudentSingleton.getInstance();
            var returnObj = ins1.createObject();
            ins1.echo(returnObj)
        });

    })




})(window,jQuery);

