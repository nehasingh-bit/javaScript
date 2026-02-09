// promise practise questions

// let promise=new Promise((resovle,reject)=>{
//     setTimeout(()=>{
//         resovle("Hello promise")
//     },1000)
// })
// .then((result)=>{
//    console.log(result)
// })



// let promise=new Promise((resovle,reject)=>{
//     setTimeout(()=>{
//         reject("Error occurred")
//     },1000)
// })
// .catch((result)=>{
//    console.log(result)
// })


//  let num=80
// let promise=new Promise((resovle,reject)=>{
//     num=9
//     if(num%2==0){
//         resovle("even")
//     }else{
//         reject("odd")
//     }
// })
// .then((result)=>{
//    console.log(result)
// }).catch((result)=>{
//    console.log(result)
// })

// function multi(num){
//     return new Promise((resolve)=>{
//         resolve(num*2)
//     })
//      resolve(num*3)
// }
// multi(3).then((result)=>{
//     console.log(result)
// })

// function reverse(string){
//     let newstring=""
//     for(let i=string.length-1;i>=0;i--){
       
//        newstring+=(string[i])
//     }
//     return newstring
// }

// console.log(reverse("neha"))