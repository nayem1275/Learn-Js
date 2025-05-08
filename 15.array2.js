// ----------------------------- Array again ----------------------------- 

let myarray=['najim',43,34,'sujzuka'];

console.log(myarray.length)
console.log(myarray.lastIndexOf(43))


// -------------------some array methods------------------------

let hero=["ranbir",'rajni',"rahul","sid"];
let heroine=["dipika",'alia',"preety"];

// hero.push(heroine[0]);
// hero.push(heroine);    //it add second array as single entity  and push as a single element
// console.log(hero)

// let couple=hero+heroine;
// console.log(couple)


// --------------------------concat------------------------------ 

    //  let add=hero.concat(heroine);       // concat return new array
    // console.log(add)

    //------------------------sprade--------------------------

    let add=[...hero,...heroine];
    console.log(add)







    let score=[23,44,33,[3,34,44,[334,66]]];
    console.log(score)

    let useScore=score.flat(Infinity)
    console.log(useScore)


    console.log(Array.isArray("Nayem"));  //array has this type of property other checked by typeof

    console.log(Array.from('Nayem'));
    console.log(Array.from({nayem:"Name"}));  //empty array specipic key and values

    let price=233;
    let price2=333;
    let price3=444;
    
    console.log(Array.of(price,price2,price3))  //make a arry with this elements