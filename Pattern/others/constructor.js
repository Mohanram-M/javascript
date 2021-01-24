/*
    3 ways to create an object in js
*/
var newObj = {};
var newObj =Object.create( Object.prototype );
var newObj = new Object();

/*
 There are four ways in which keys and values can be assigned to objects
*/
//1. he Dot synatx
newObj.abc="def"

//2. square Bracket synatax
newObj["abc"]="def"

//3. Object.defineProperty
Object.defineProperty(newObj,"key1",{
    "key1_1":"att1_1",
    "key2_1":"att2_1"
});

//4. Object.defineProperties
Object.defineProperties(newObj,{
    "prop1":{
        "key1":"att1",
        "key2":"att2"
    },
    "prop2":{
        "key3":"att3",
        "key4":"att4"
    }
})

//Note Define properties are used in inheritence..

/*
    Basic  Constructor
    There is no classes in JS. By simply prefixing new keyword to a function call,
    We can make the function behave like a constructor and tell JS to create new
    Objects from the function with the members defined inside the function.

    By using new key word, the this keyword in the function referes to the current object 
    being created.
*/

function Car(model,year,miles){
    this.model=model;
    this.year=year;
    this.miles=miles;
    this.toString=function(){
        console.log(this.model+"_"+this.year+"_"+this.miles);
    }
}

var car1=new Car("m1",2010,120);
var car2=new Car("m2",2020,340);

/*
    Advanced version
    Constructor With Prototype
    The basic version has a function inside the constructor,which is a bad design
    because the functions has to be shared between objects.
    So a better design would be to use prototypes which are made avilabe to all object /function creation
*/

function Car(model,year,miles){
    this.model=model;
    this.year=year;
    this.miles=miles;
}

Car.prototype.toString=function(){
    console.log(this.model+"_"+this.year+"_"+this.miles);
}