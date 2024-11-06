// Type-Annotation is what we tell to ts code that what type of value we have assigned to it.
// Type-Inference is where TS tries to figure out what type of value it got assigned

let num : number = 5;
num = 3;

let nam : string = 'Akash';
nam = '1';

let bool : boolean = true;
bool = false ;

let date : Date = new Date();

//Object

date.setDate(10/10/1995);

//Arrays

let A : string[] = ['a','b','v'];
let N : number[] = [1,2,3]

//Object literal

let point : {x:number ; y:number}={
    x:5 , y:10
}

// class

class Car {};

let car1 : Car = new Car();

// functions

const longNumber:(i:number)=>void = (i:number)=>{
console.log(i)
}

// When to use Type Any??

 //1) When functions returns type any

 const json = '{"x":10,"y":20}';
 const coordinate : {x:number,y:number} = JSON.parse(json);
 console.log(coordinate)

 //2) When we declare a var on one line and initialise on another.

 let words = ['red','green','blue'];
 let foundWord:boolean;


 for(let i=0 ; i<words.length ; i++){
    if(words[i] === 'green'){
        foundWord = true;
    }
 }

 //3) Variables whode type cannot be inferred correctly

 let numbers = [-10,-1,12];
 let numberAboveZero:boolean|number = false;

 for(let i=0 ; i < numbers.length ; i++){
    numberAboveZero = 23;
 }

// Functions
 const add = (a:number , b:number):number=>{
   return a+b;
 }

 function divide(a:number , b:number):number{
    return a/b;    
 }

 const multiply = function(a:number , b:number):number{
  return a*b;
 }

 const logger = (message:string):void => {
    console.log(message);
 }

 const throwError = (message:string):never => {
    throw new Error(message);
 }

 const forecast = {
    date : new Date(),
    weather : 'sunny'
 };

 const logWeather = (forecast:{date:Date , weather : string}):void=>{
    console.log(forecast.date);
    console.log(forecast.weather);
 }



// Objects

 const profile = {
   name1 : 'Akash',
   age : 20 ,
   coords: {
      lat:0,
      lng:15
   },
   setAge(age:number):void{
      this.age = age;
   }
 }

 const {age , name1}:{age:number ; name1:string} = profile;


//ARRAYS

 const carmakers:string[] = ['ford' , 'bmw' ,'Honda'];
 const car:string[][] = [['bme'],['amg']]

  //Flexible types array

  const importantDates: (Date | string)[] = [new Date(),'Akash'];

//Tuples

 const pepsi:[string,boolean,number] = ['browm',true,40];

 //Interface
   //Interface is like gate keeper ,it manages the structure of obj and properties .

 interface Vehicle {
   name:string,
   year:number,
   broken:boolean
 }

 const oldCivic = {
   //obj
   name:"civic",
   year:2000,
   broken:true
}

// const printVehicle = (vehicle:{name:string;year:number;broken:boolean}):void=>{
// console.log("Name of the car"+vehicle.name);
// console.log("Car model is"+vehicle.year);
// console.log("Is it broken"+vehicle.broken)
// }


//Using interface
const printVehicle = (vehicle:Vehicle):void=>{
   console.log("Name of the car"+vehicle.name);
   console.log("Car model is"+vehicle.year);
   console.log("Is it broken"+vehicle.broken)
   }

printVehicle(oldCivic);



//Classes
  // Is a blue print for an obj with fields and methods

  class Vehicle2 {

   constructor(public color:string){

   }

   protected drive():void{
    console.log('Chuga chuga');
   }

  public honk():void{
      console.log('beep');
   }
  }


  class Car2 extends Vehicle2 {


   //Is a special method to initialize an obj when its created
   constructor(public wheels : number , color:string){
      super(color);
   }

   drive():void{
      console.log('Vroom');
     }
  }

  const car2 = new Car2(4,'red');

  car2.drive();








