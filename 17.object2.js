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


// ---------------------------- Merge two object -----------------------


let obj1={text:'name'};
let obj2={text:'age'};

console.log(obj1+obj2)

let obj3={obj1,obj2}
console.log(obj3)

let obj4=({},obj1,obj3)
console.log(obj4)


let obj5=Object.assign({},obj1,obj2)
console.log(obj5)