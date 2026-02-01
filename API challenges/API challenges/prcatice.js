
// let found=false
// function findelement(array,find){
//     array.filter((element,index )=> {
//         if (element===find){
//           found=true
          
//           console.log(index)
         
//         }
//     });
//     if (found===false){
//      console.log("element not found")
//     }
// }
// findelement([8,4,3,2,7,6,8,5],2)

//........................  reverse array Input: [1,2,3,4]    
// function reverse(array){
//     let sort=[];
//     j=0
//     for(let i=array.length-1; i>=0;i--){
//         sort[j]=array[i]
//         j+=1
        
//     }
//     return sort

   
// }
// console.log(reverse([1,2,3,4,90,76]))

// ...................

// function reverseInPlace(array) {
//   let left = 0, right = array.length - 1;

//   while (left < right) {
//     [array[left], array[right]] = [array[right], array[left]];
//     left++;
//     right--;
//   }

//   return array;
// }

// console.log(reverseInPlace([1,2,3,4])); // [4,3,2,1]

// ................moves zero to end.............
// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

// function moveszero(array) {
//   let count = 0;

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === 0) {
//       count++;
//       array.splice(i, 1);
//       i--; // ✅ works in for loop
//     }
//   }

//   while (count > 0) {
//     array.push(0);
//     count--;
//   }

//   return array;
// }

// console.log(moveszero([0,1,0,3,12]));


