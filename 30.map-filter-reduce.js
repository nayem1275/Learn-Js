let number= [1,2,3,4,5,6,7,8,9];

let hold=number.filter((num)=>num<4);

console.log(hold);

let newNum=[];

// number.forEach((num)=>{
//            if(num<4){
//               newNum.push(num)
//            }
// });

// console.log(newNum)   

let store=number.map((num)=> num>5);
let store2=number.map((num)=> num*5);

console.log(store);
console.log(store2)

let store3=number.map((num)=>num*10).map((num)=>num+1).filter((num)=>num<50);
console.log(store3);



let store5=number.reduce((acc,currval)=>
           acc+currval
,0);

console.log(store5)







