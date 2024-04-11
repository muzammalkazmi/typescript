const myFunction : (x: number)=> void =(x:number)=>{
     console.log(x)
}

const afucnction = (x:number, y: number): void =>{
    console.log('hello')
}

// anonymous function with variable
const weather={
    date: new Date(),
    forecast:'sunny'
}
 
const weatherForecast = (forcast:{date: Date, weather: string})=>{
    console.log(weather.date)
    console.log(weather.forecast)
}

// above function with destructuring syntax
const forcastedweather = ({date, forcast}:{date: Date, forcast: string}): void=>{
    console.log(date)
    console.log(forcast)
}