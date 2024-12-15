//declaring kelvin temperature
const kelvin = 293;
//converting kelvin into celsius
const celsius = kelvin -273;
//calculating fahrenheit
let fahrenheit = celsius * (9/5) + 32;
//Rounding fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
