class Car {
    maker: string
    model: number
}

const mycar = new Car('Texla', 2020)

// object literals
 const point : {x: number; y: number}={
    x:10,
    y:20
 }

 // how to use annotations with objects with nested objects and function 

 const profile ={
    name: "Ali",
    age: 20,
    location:{
        lag: 0,
        lat: 13
    },
    setAge(age:number):void{
        this.age = age
    }
 };

 // careful about syntax ; the first part is showing destructuring while the second part is of annotation.

 const {age}: {age: number}= profile

 // now destructuring nested object and annotating

 const {location:{lag,lat}}:{location:{lag:number,lat:number}}=profile
