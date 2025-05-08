// Java script can hold data Boolean,string, object 

console.log("Array in js");

let arr=[true,false,24,"Nayem",{
       "Name":"Rabiul",
       "Id":"1049"
}]


let myMovie=['Marvel','Titanic'];
console.log(arr)            //operation in array give a shallow copy not deep copy
 console.log(arr[4])

const newarr=new Array();


// -----------------------------Array Methods---------------------------

let myIndex=[13,56,76,43,56,654];
myIndex.push(10);          //add element after last index
console.log(myIndex)
myIndex.pop();
console.log(myIndex);
myIndex.unshift(55);  //add first index
console.log(myIndex)
myIndex.shift();
console.log(myIndex)
console.log(myIndex.includes(9))
console.log(myIndex.indexOf(76))

let index=myIndex.join();

console.log(index)
console.log(typeof index);

// ----------------slice and splice----------------------------- 

// slice just slicing and give  a part but splice change the value of main array  


let number=[76,90,65,98,53];
let slicing=number.slice(1,4);
console.log(slicing);
console.log(number)


let number2=[76,90,65,98,53];
let splicing=number2.splice(1,4);
console.log(splicing);
console.log(number2)

