let user=new Object();

console.log(user)
user.id=1254;
user.name="sam";
user.isLoggedin='true';

console.log(user)

let reguleruser={
                       email:'masha@gmail.com',
                       username:{
                                  name:'NAyem',
                                  lastname:'ahmed'
                       }
}

console.log(reguleruser)
console.log(reguleruser.email)
console.log(reguleruser.username)
console.log(reguleruser.username.name)

console.log(Object.keys(reguleruser));
let store=Object.keys(reguleruser);      //we can use object key value,store as an arrray and do operation on them
store.forEach(element => {
      console.log(element)
});
console.log(Object.entries(reguleruser))   //array bana diya

console.log(reguleruser.hasOwnProperty('email'))

// ---------------------------- Merge two object -----------------------


let obj1={a:'1',b:'3'}
let obj2={c:'2',d:'4'}
let obj3={e:'5',f:'7'}

//  let objMerge={obj1,obj2,obj3};    let objMerge=Object.assign({obj1,obj2,obj3})      ;it take every obj as a element and make new object with them not merge 
// let objMerge=Object.assign({},obj1,obj2,obj3);   merge
// let objMerge=Object.assign(obj1,obj2,obj3);   //merge
let objMerge={...obj1,...obj2,...obj3}  //merge
console.log(objMerge);