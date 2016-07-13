/**
 * Created by UCHATNU on 7/13/2016.
 * Reading and writing properties
 */


(function(){
    //reading object properties
    var studentObj = {
            id:100,
            name:"Nuwan"
    };

    //using dot(.) notation
    console.log(studentObj.id+"-"+studentObj.name);

    //using bracket([]) notation
    console.log(studentObj["id"] + "-" + studentObj["name"]);

    //the advantage of using bracket notation SOMETIMES(as per the need) can deal with 'variables'

    var obj={};
    var id="id",name="name";
    obj[id]=100;
    obj[name]="Nuwan";

    console.log(obj);

})();


(function(){
    //writing to object

    var obj={};
    Object.defineProperties(obj,{ //can use "defineProperty" for single property
        id:{
            value:100
        },
        name:{
            value:"Nuwan"
        }
    });

    console.log(obj.id+"--"+obj.name);
})();


