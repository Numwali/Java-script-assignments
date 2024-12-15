// Declaring kelvin temperature
const kelvin = 293;

// Converting kelvin into celsius
const celsius = kelvin - 273;

// Convert to Newton
let newton = celsius * (33 / 100);

// Rounding newton temperature
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);
