/**
 * Created by UCHATNU on 5/22/2016.
 */
var com = com || {};
com.nuwan = com.nuwan || {};
com.nuwan.sms = com.nuwan.sms || {};

com.nuwan.sms.student = {

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

com.nuwan.sms.student.echo("Test Message");
com.nuwan.sms.student.echo(com.nuwan.sms.student.info.marks);
com.nuwan.sms.student.echo(com.nuwan.sms.student.info.name);
com.nuwan.sms.student.echo(com.nuwan.sms.student.info.age);


com.nuwan.sms.student.setMarks(10000);
com.nuwan.sms.student.echo(com.nuwan.sms.student.info.marks);