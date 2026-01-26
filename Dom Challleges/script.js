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


