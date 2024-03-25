
const obj= new Object();
obj.user="Saurav";
obj.login={
    email:"saurav@gmail.com",
    age:18
}
// console.log(obj.login?.email);

//object in object
const obj1={1:'a',2:"b"};
const obj2=new Object({3:'c',4:'d'});

const obj3={obj1,obj2};

const obj4=Object.assign({},obj1,obj2);
const obj5={...obj1,...obj2};

// console.log(obj3);
// console.log(obj4);
// console.log(obj5);

const person={
    first_name:'saurav',
    last_name:"Rawat"
}

const {first_name}= person;
const {first_name : first}=person;
console.log(first_name);
console.log(first);