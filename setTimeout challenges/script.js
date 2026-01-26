//  javaScript fundamendal interview questions

// let user1 = {
//   name: "Neha",
//   address: {
//     city: "Delhi"
//   }
// };

// // Shallow copy
// let user2 = { ...user1 };

// // Andar ke object ko change kiya
// user2.address.city = "Noida";

// console.log(user1.address.city); // Noida
// console.log(user1)
// console.log(user2)


// let user1 = {
//   name: "Neha",
//   address: {
//     city: "Delhi"
//   }
// };

// let user2 = {
//   name: "Singh",
//   address: {
//     city: "Noida"
//   }
// };

// console.log({...user1,...user2})


// merge two objects
// const user1 = { name: "Neha", age: 22 };
// const user2 = { city: "Delhi", role: "Developer" };

// const mergedUser = { ...user1, ...user2 };

// console.log(mergedUser);
 
// console.log(y); 
// let y = 20;

// let a = 10;
// let b = a;
// b = 20;

// console.log(a); // 10
// console.log(b); // 20
// console.log(a===b)


// let obj1 = { count: 1 };
// let obj2 = obj1;

// obj2.count = 5;

// console.log(obj1.count); 
// console.log(obj1===obj2)


// function updateUser(user) {
//   user.name = "Updated";
// }

// const a = { name: "Original" };
// updateUser(a);

// console.log(a.name); // "Updated"

// let a;
// console.log(a); // undefined

// let b=null;
// console.log(b)
// console.log(a===b)
// console.log(typeof a, b)

// var a=10;
// var a=20;
// console.log(a,a)

// let a=10;
// a=20;
// console.log(a)

// console.log("5"+1)
// console.log("5"-1)
// a=("5"*2)
// console.log(typeof a)

// const numbers = [1, 2, 3, 4];
// const sum = numbers.reduce((ac   c, n) => acc + n, 0);
// console.log(sum)

// const original = { name: "Ravi", address: { city: "Chennai" } };

// const copy1 = { ...original };          // spread
// const copy2 = Object.assign({}, original);
// // Now observe the behavior:

// // javascript
// copy1.address.city = "Bangalore";

// console.log(original.address.city); // Bangalore
// console.log(original===copy1)
// console.log(copy2)
// console.log(original)


// const original = { name: "Ravi", address: { city: "Chennai" } };

// const copy1 = { ...original };          // spread
// const copy2 = Object.assign({}, original);
// copy1.address.city = "Bangalore";

// console.log(original.address.city); // Bangalore


// const user = { name: "Asha", age: 22 };
// const updatedUser = { ...user, age: 23 };
// console.log(user===updatedUser)
// console.log(user)
// console.log(updatedUser)


// 3️⃣ Spread in function calls
// javascript
const nums = [1, 2, 3];

function sum(a, b, c) {
  return a + b + c;
}

let result=sum(...nums); 
console.log(result)
// 6

