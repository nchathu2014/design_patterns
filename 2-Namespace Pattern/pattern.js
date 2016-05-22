/**
 * Created by UCHATNU on 5/21/2016.
 */


var student = {

    info:{
      name:"Nuwan Chathuranga",
      age:100,
      marks:[12,13,14,15]
    },
    setMarks:function(mark){
        this.info.marks.push(mark);
    },

    echo:function(msg){
        console.log(msg);
    }
};

student.echo("Test Message");
student.echo(student.info.marks);
student.echo(student.info.name);
student.echo(student.info.age);


student.setMarks(10000);
student.echo(student.info.marks);

