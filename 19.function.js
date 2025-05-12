// ------------------------------ function -----------------------------------

// function for do a task many time 

// there are lots of methods and way to define a function 

// ------------------------------- 1 ----------------------------------- 

// function display(){
//                console.log('Its a function')    //defination
//                return 100;
// }
// console.log(display)
// display   // function refference
// display()  //function call

let store=function(){
    console.log('Its also a function') 
    return 10;  //this 10 go to store but it should be called not recognize if pass only reffrence  
}
// store();
console.log(store()) //it show that has a FUNCION  CAN NOT    call.. when i return something it show the return value but it print late function call work fast
// console.log(store()); // it can call but has a value undefined 

// how a return value hold?  

function add(num1,num2){
          return  num1+num2;   //if i dont return value it give undefined
}

let hold=add(6,7); 

console.log(hold)