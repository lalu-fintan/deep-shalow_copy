const { json } = require("express");

let name = "laluprasath";
let name2 = name;
name2 = "karthick";
console.log(name2);
// console.log(name); //this is deep, if we assign the name2=name, so the both values are same but if I change the name 2 value ,it will not affect the name , because both are diff memeory location.

// shallow copy =object

const newUser = {
  name: "laluprasath",
  age: 22,
};

const newUser2 = newUser;

newUser.age = 21;

console.log({ newUser }); //{ name: 'laluprasath', age: 21 }
console.log({ newUser2 }); //{ name: 'laluprasath', age: 21 }

// here I changed only the newUser value, bot It was affect the newUser2 also , this is shallow copy.

// array

const val = [21, 43, 52, 41, 65];
const val2 = val;
val[0] = 98;
console.log(val); //[ 98, 43, 52, 41, 65 ]
console.log(val2); //[ 98, 43, 52, 41, 65 ]

// how to avoid the shallow cpy

// 1. JSON

// object
// const userDetail = {
//   name: "laluprasath",
//   age: 22,
// };

// const userDetail2 = JSON.parse(JSON.stringify(userDetail));
// userDetail2.age = 21;

// console.log(userDetail); //{ name: 'laluprasath', age: 22 }
// console.log(userDetail2); //{ name: 'laluprasath', age: 21 }

// array

const userVal = [98, 43, 52, 41, 65];
const userVal2 = JSON.parse(JSON.stringify(userVal));
userVal2[0] = 78;
console.log(userVal); //[ 98, 43, 52, 41, 65 ]
console.log(userVal2); //[ 78, 43, 52, 41, 65 ]

// 2.spread operator

const userDetail3 = {
  name: "laluprasath",
  age: 22,
};

const userDetail4 = { ...userDetail3 };

userDetail4.age = 24;
console.log({ userDetail3 });
console.log({ userDetail4 });

const userVal3 = [98, 43, 52, 41, 65];

const userVal4 = [...userVal3];
userVal4[0] = 78;
console.log(userVal3); //[ 98, 43, 52, 41, 65 ]
console.log(userVal4); //[ 78, 43, 52, 41, 65 ]

// 3.new Object (only for object)

const userDetail5 = {
  name: "karthick",
  age: 29,
};

const userDetail6 = Object.assign({}, userDetail5);
userDetail6.name = "kumar";
console.log({ userDetail5 }); //{ userDetail6: { name: 'karthick', age: 29 } }
console.log({ userDetail6 }); //{ userDetail6: { name: 'kumar', age: 29 } }

// but In complecated situation we can use JSON, other things is not working properly

const userDetail = [
  { name: "laluprasath", age: 22 },
  {
    name: "laluprasath",
    age: 22,
    address: {
      city: "karur",
      state: "IN",
    },
  },
];
// const userDetail2 = JSON.parse(JSON.stringify(userDetail)); // it will not affect userDetail
const userDetail2 = { ...userDetail }; // it will affeect the userDetail
userDetail2[1].address.city = 21;

console.log(userDetail); //{ name: 'laluprasath', age: 22 }
console.log(userDetail2); //{ name: 'laluprasath', age: 21 }
