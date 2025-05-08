console.log('String')

let country="America";

let capital="New York";

let gdp=1000000;

console.log(country+capital+gdp)

console.log('Bangladesh '+ 'Dhaka' + 60000) //not a good practice...

console.log(`The name of country is ${country} and its capital is ${capital}`) // modern practice

const city=new String('Washington')  //if we its in br console its gives a object with key value pairs and some protptyps and methed

console.log(city[0])  //key value pair getting

console.log(city.__proto__)  //protoype]
console.log(city.length)
console.log(city.toLocaleUpperCase())
console.log(city.toLowerCase())         //original value not change

console.log(city.charAt(5));

console.log(city.indexOf('n'))    //methods

console.log(city.slice(4,6))   //negetive value taken
console.log(city.substring(5,9));   //can store in varriable
console.log(city.trim())      // trime spaces from start and end  
console.log(city.trimStart())
console.log(city.trimEnd())



console.log(city.split('-'))  //make a strings in a array

console.log(city.replace('W','D'))  //replace

console.log(city.includes('ton'))





