/**
 * Created by UCHATNU on 5/21/2016.
 */

var name="Nuwan";
var age = 100;
var marks=[12,13,14,15];


function setMarks(mark){
    marks.push(mark);
}

function echo(msg){
   console.log(msg);
}


//========== run ============

echo("Test Message");
echo(marks);
echo(age);
echo(name);

setMarks(100);
echo(marks);



