let course={
           courseName:"Learn Java Script",
           price:"10000",
           courseInstructor:"Hitesh & Harry "
}

console.log(course);

let{courseInstructor}=course;    //destructure  {value} and value are destructure
let{courseInstructor:teacher}=course;  //destucture and give another name

console.log(courseInstructor)
console.log(teacher)

//JSON doesnot contain name and object has name ....


// {
//     "courseName":"Learn Java Script",
//     "price":"10000",                                     JSON
//     "courseInstructor":"Hitesh & Harry "
// }

// [{}
//     {}                 object into array
//     {}
// ]