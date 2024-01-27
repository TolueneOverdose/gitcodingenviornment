/*
Types of data types: i) Primitive ii) Non-premitive(Reference)
Primitive: 7 Types
-> String, Number, Boolean, null, undefined, Symbol, BigInt

Reference: 3 Types 
    -> Array, Objects, Functions  -->return type is object aka object-function
*/

//Symbol
let hello=Symbol("Lakhan")
let world=Symbol("Lakhan")
console.log(hello==world) //false=> hello and world have same value but are unique
//Array:
let arr=["hello", "world"]
console.log(arr[0]);

//Objects:
let obj={
    name: 'Tapan',
    age: 18,
}
//Funcitons
let func=function(){ 
    console.log("jello")
}

console.log(func);