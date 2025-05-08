console.log("Dates and Time")

let date=new Date; 

console.log(date)
console.log(date.getDay())
console.log(date.getDate())
console.log(date.getTime())
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getSeconds())
console.log(date.toDateString())
console.log(date.toISOString())
console.log(date.toLocaleString())
console.log(date.toDateString())
console.log(typeof date)

// let date2=new Date(2000,10,2)  //month count from 0==january     formate y,m,d

// let date2=new Date("2000-10-2") //if put string it start month from 1==january

let date2=new Date('12-02-2002')  // m d y  formate 
console.log(date2)

console.log(date2.toLocaleString())

let time= Date.now();  //milliseconds
console.log(time)

let date3=new Date("05-8-2025");
console.log(date3)
console.log(date.getTime()/1000)