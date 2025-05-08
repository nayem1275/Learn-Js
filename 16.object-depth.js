let symbl=Symbol('key')
console.log(typeof symbl)
// let object=new Object(); singleton

let obj={
            name:"Nayem",
            profession:"student",
            institute:"prime",
            dept:"cse",                                  //object literales
            id:"1049",
            "full name":"Md Rabiul Islam Nayem",
            [symbl]:'mykey1'                     //use as symbol sytax
}

console.log(obj.name)
console.log(obj['institute']);
console.log(obj['full name'])
console.log(obj[symbl])
console.log(typeof obj[symbl]);

obj.greet=function(){
                 console.log(`hello ${this.name}`)  //this keyword reffer current context a=/object
}
obj.greet();
console.log(obj)
console.log(obj.greet())
obj.year=1000;
console.log(obj)
Object.freeze(obj) //frezee object syntax no changes are not possibl after freeze
