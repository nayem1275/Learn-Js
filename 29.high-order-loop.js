let myArray=[12,24,'Nehal','js','25'];

let myString='Shan';

let myObject={
          name:"Nayem",
          age:26,
          profession:'student'
}

let myMap=new Map();
myMap.set('js','javascript');
myMap.set('py','python');
myMap.set('rb','ruby');


// ---------------------------------- For of looop ---------------------------------------

// for (const element of myArray) {                       //itteratable , elements are the property of an array
//     console.log(element)
// };

// for (const element of myString) {
//     console.log(element)                              //itteratable   ,elements are the property of an array
// };

// // for (const element of myObject) {
// //     console.log(element)                           // not itteratable
// // }

// for (const [element,value] of myMap) {                 //itteratable,but getting element separeately destructured it  element are key and value are value
//     console.log(element)
// }




// ---------------------------------- For in looop ---------------------------------------
// for in loop treat everything as an array where key or element are count as index number

// for (const element in myArray) {                       //itteratable  element are the index
//     console.log(myArray[element])
// };

// for (const element in myString) {
//     console.log(myString[element])                              //itteratable  element are index
// };

// for (const element in myObject) {
//     console.log(myObject[element])                           //itteratable  element are key
// }

// for (const  element in myMap) {                 //not itteratable
//     console.log(element)
// }



// ----------------------------------- For each loop ---------------------------------------


// myArray.forEach((element,index,myArray)=>{
//      console.log(myArray)                            //itteratable
// })


// myString.forEach((element)=>{
//       console.log(element)                   //not ittarable
//  })



// myObject.forEach((element)=> {
//      console.log(element.age)                //not ittarable
// }); 


// myMap.forEach((element,val,index)=>{
//           console.log(index)                     //itterable as array
// })