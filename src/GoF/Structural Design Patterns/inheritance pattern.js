/**
 * Created by UCHATNU on 5/22/2016.
 */

function Beverage(name,temprature){
    this.name=name;
    this.temprature = temprature;
};

Beverage.prototype.drink=function() {
    console.log("I am drink " + this.name)
};

function Coffee(type){
    Beverage.call(this,"Black Coffee","hot");
    this.type=type;
};

Coffee.prototype=Object.create(Beverage.prototype);

Coffee.prototype.sip=function(){
    console.log("Sipping some awesome "+this.temprature+" "+this.name);
};

var beverage = new Beverage("water","cold");
    beverage.drink();

var coffee = new Coffee("black coffee");
    coffee.drink();
    coffee.sip();





