// let para=document.getElementById("textpara")
// let increseB=document.getElementById("increaseBtn")
// let decreaseB=document.getElementById("decreaseBtn")
// let size= 16;
// para.style.fontSize=size+"px";
// increseB.addEventListener("click",()=>{
//     size+=2
//     para.style.fontSize=size+"px";
//     })

// decreaseB.addEventListener("click",()=>{
//     size-=2;
//     para.style.fontSize=size+"px";
// })


//   Challenges 2

// let para= document.getElementById("errorMsg")
// let celsiusBtn= document.getElementById("celsius")
// let fahrenheitBtn= document.getElementById("fahrenheit")
// celsiusBtn.addEventListener("input",()=>{
//     if(!isNaN(celsiusBtn.value)){
//         para.innerText=""
//         fahrenheitBtn.value= (celsiusBtn.value * 9/5) + 32

//     }else{
//         para.innerText="pls enter a number"
//         fahrenheitBtn.value=""
//     }
// })

// fahrenheitBtn.addEventListener("input",()=>{
//     if(!isNaN(fahrenheitBtn.value)){
//         para.innerText=""
//         celsiusBtn.value=(fahrenheitBtn.value - 32) * 5/9

//     }else{
//         para.innerText="pls enter a number"
//         celsiusBtn.value=""
//     }
// })


// challenge 3

// let postBtn= document.getElementById("postBtn")
// let text=document.getElementById("commentInput")
// let para= document.getElementById("errorMsg")
// let commentOut=document.getElementById("commentCount")
// let commentList= document.getElementById("commentList")

// let count=0;
// postBtn.addEventListener("click",()=>{
//     let cleanedText = text.value.trim();
//     if(cleanedText.length===0){
//         para.innerText="the comment should not be empty";

//     }else if (cleanedText.length<5){
//         para.innerText="Comment must be at least 5 characters"
//     }else if (cleanedText.length>200){
//         para.innerText="Comment must be less than 200 characters"

//     }else{
//         para.innerText=""
//         let commentBox = document.createElement("div");
//         commentBox.innerText= cleanedText
//         let deleteBtn=document.createElement("button");
//         deleteBtn.innerText = "Delete";
//         commentBox.appendChild(deleteBtn);
//         commentList.appendChild(commentBox);
//         count++;
//          commentOut.innerText = "Total Comments: " + count;
//         text.value = "";
//         deleteBtn.addEventListener("click",()=>{
//             commentList.removeChild(commentBox)
//             count--;
//              commentOut.innerText = "Total Comments: " + count;
            
//         })

//     }
// })



// chanllenge 3 web assessement 3.1 .................................

// let inputItem= document.getElementById("itemInput")
// let Addbtn= document.getElementById("addBtn")
// let ErrorMsg= document.getElementById("errorMsg")
// let countItem= document.getElementById("itemCount")
// let listofitems= document.getElementById("itemList")
// let count=0
// Addbtn.addEventListener("click",()=>{
//     let text=inputItem.value.trim()
//     if(text.length===0){
//         ErrorMsg.innerText="Please enter an item"
//     }else{
//         ErrorMsg.innerText=""
//         inputItem.value=""
//         let itemBlock=document.createElement("div")
//         itemBlock.innerText=text
//         let deleteBtn=document.createElement("button")
//         deleteBtn.innerText="Delete";
//         itemBlock.appendChild(deleteBtn)
//         listofitems.appendChild(itemBlock)
//         count++;
//         countItem.innerText="Total Items: " +count;
//         deleteBtn.addEventListener("click",()=>{
//             listofitems.removeChild(itemBlock)
//             count--;
//             countItem.innerText="Total Items: "+count;
//         })
        
//     }
// })


//  web assessment 4.0 challenge 1................

// ---------------- QUESTIONS DATA ----------------
// var questions = [
//   {
//     questionText: "Which planet is known as the Red Planet?",
//     correctAnswer: "Mars",
//     incorrectAnswers: ["Venus", "Jupiter", "Mercury"]
//   },
//   {
//     questionText: "What is the capital of Japan?",
//     correctAnswer: "Tokyo",
//     incorrectAnswers: ["Kyoto", "Osaka", "Nagoya"]
//   },
//   {
//     questionText: "Which instrument has 88 keys?",
//     correctAnswer: "Piano",
//     incorrectAnswers: ["Guitar", "Violin", "Flute"]
//   },
//   {
//     questionText: "Which gas do plants absorb from the atmosphere?",
//     correctAnswer: "Carbon dioxide",
//     incorrectAnswers: ["Oxygen", "Nitrogen", "Helium"]
//   },
//   {
//     questionText: "Who wrote 'Romeo and Juliet'?",
//     correctAnswer: "William Shakespeare",
//     incorrectAnswers: ["Charles Dickens", "Mark Twain", "Jane Austen"]
//   },
//   {
//     questionText: "What is the largest ocean on Earth?",
//     correctAnswer: "Pacific Ocean",
//     incorrectAnswers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean"]
//   }
// ];

// // ---------------- DOM ELEMENTS ----------------
// let questionNumber = document.getElementById("questionNumber");
// let questionText = document.getElementById("questionText");
// let options = document.querySelectorAll("input[name='option']");
// let optionLabels = document.querySelectorAll(".option-label");
// let statusText = document.getElementById("status");
// let nextBtn = document.getElementById("nextBtn");

// // ---------------- STATE ----------------
// let currentIndex = 0;

// // ---------------- DISPLAY QUESTION ----------------
// function displayQuestion() {
//   let currentQuestion = questions[currentIndex];

//   questionNumber.innerText = "Question " + (currentIndex + 1);
//   questionText.innerText = currentQuestion.questionText;

//   let allOptions = [
//     currentQuestion.correctAnswer,
//     currentQuestion.incorrectAnswers
//   ];

//   options.forEach((radio, index) => {
//     radio.checked = false;
//     radio.value = allOptions[index];
//     optionLabels[index].innerText = allOptions[index];
//   });

//   statusText.innerText = "";
// }

// // ---------------- CHECK ANSWER ----------------
// options.forEach((radio) => {
//   radio.addEventListener("change", function () {
//     let selectedAnswer = this.value;
//     let correctAnswer = questions[currentIndex].correctAnswer;

//     if (selectedAnswer === correctAnswer) {
//       statusText.innerText = "Correct";
//     } else {
//       statusText.innerText = "Wrong";
//     }
//   });
// });

// // ---------------- NEXT BUTTON ----------------
// nextBtn.addEventListener("click", () => {
//   currentIndex++;

//   if (currentIndex < questions.length) {
//     displayQuestion();
//   } else {
//     questionNumber.innerText = "";
//     questionText.innerText = "All questions are over.";
//     statusText.innerText = "";

//     options.forEach((radio, index) => {
//       radio.checked = false;
//       radio.disabled = true;
//       optionLabels[index].innerText = "";
//     });
//   }
// });

// // ---------------- INITIAL LOAD ----------------
// displayQuestion();


// ..................................Dom practice questions from sensai...................

// let para=document.getElementById("para")
// let btn=document.getElementById("btn")
// let cat=document.getElementById("cat")
// btn.addEventListener("click",()=>{
//     para.innerText="Welcome back!"
//       let select = document.createElement("select");
//       select.innerHTML = `
//     <option disabled selected>Select category</option>
//     <option>History</option>
//     <option>Math</option>
//     <option>English</option>
//   `;

//   cat.appendChild(select);
// })


//   ............................2.....

// let para=document.getElementById("para")
// let count=0
// let btn=document.getElementById("btn").addEventListener("click",()=>{
//     count++
//     para.innerText=`count:${count}`
// })


// ........................3.........

// let para = document.getElementById("para");
// let btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//   if (para.style.display === "none") {
//     // show
//     para.style.display = "block";
//     btn.innerText = "Hide";
//   } else {
//     // hide
//     para.style.display = "none";
//     btn.innerText = "Show";
//   }
// });

// .......................................4.
// let para = document.getElementById("para");
// let red = document.getElementById("red").addEventListener("click",()=>{
//     para.style.color="red"
// })
// let green = document.getElementById("green").addEventListener("click",()=>{
//     para.style.color="green"
// })
// let blue = document.getElementById("blue").addEventListener("click",()=>{
//     para.style.color="blue"
// })


// ................................5...............
//  let para = document.getElementById("para");
//  let input= document.getElementById("input");
//   let btn =document.getElementById("btn").addEventListener("click",()=>{
//     if(input.value.trim()!==""){
//       para.innerText=input.value
//       para.style.color="blue"
//     }else{
//         para.innerText="enter input"
//         para.style.color="red"
//     }
//   })


// ....................6.............
//  let list = document.getElementById("list");
//  let input= document.getElementById("input");
//   let btn =document.getElementById("btn").addEventListener("click",()=>{
//     let item=document.createElement("li")
//     item.innerText=input.value
//      list.appendChild(item)
//      input.value=""
//   })


// ....................7..............


//  let para= document.getElementById("para");
//  let select= document.getElementById("select");
//  select.addEventListener("change",()=>{
//     para.textContent=select.value
//  })

// ........................8..................

// let para= document.getElementById("para");
// let btn= document.getElementById("btn")
// btn.addEventListener("click",()=>{
//     para.innerText="text Submitted"
//     btn.disabled=true
//      btn.textContent = "Submitted ✔";

// })

// .......................9.....................

//  let para= document.getElementById("para");
// let btn= document.getElementById("btn")
// btn.addEventListener("click",()=>{
//     para.remove()

// })


// ..............10................

// let title=document.createElement("input")
// title.placeholder="Title"
// let discription=document.createElement("input")
// discription.placeholder="Discription"
// let btn=document.createElement("button")
// btn.textContent="Create Card"
// document.body.append(title, discription, btn)

// btn.addEventListener("click",()=>{
//     let div=document.createElement("div")
//     let h3=document.createElement("h3")
//     h3.innerText=title.value
//     let para=document.createElement("p")
//     para.innerText=discription.value
    
//     div.append(h3,para)
//     document.body.append(div)
    
    
// })