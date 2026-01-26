
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

// import { createElement } from "react"

// // ---------------- DOM ELEMENTS ----------------
// let questionNumber = document.getElementById("questionNumber");
// let questionText = document.getElementById("questionText");
// let options = document.querySelectorAll("input[name='option']");
// let optionLabels = document.querySelectorAll(".option-label");
// let statusText = document.getElementById("status");
// let nextBtn = document.getElementById("nextBtn");

// // ---------------- STATE -------------
// let currentIndex = 0;

// // ---------------- DISPLAY QUESTION 
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
// displayQuestion();






// let moviename = document.getElementById("name");
// let releaseYear = document.getElementById("year");
// let movieForm = document.getElementById("movieForm");
// let movielist = document.getElementById("movies");

// let movies = [];

// // form submit
// movieForm.addEventListener("submit", function (event) {
//   event.preventDefault();

//   // new movie object
//   let movieObj = {
//     name: moviename.value,
//     year: releaseYear.value,
//     votes: 0
//   };

//   // add to array
//   movies.push(movieObj);

//   // update screen
//   renderMovies();

//   // clear inputs
//   moviename.value = "";
//   releaseYear.value = "";
// });

// function renderMovies() {
//   // sort by votes
//   movies.sort(function (a, b) {
//     return b.votes - a.votes;
//   });

//   // clear old list
//   movielist.innerHTML = "";

//   // show movies
//   movies.forEach(function (movie) {
//     let row = document.createElement("div");

//     let text = document.createElement("span");
//     text.innerText =
//       movie.name + " | " +
//       movie.year + " | Votes: " +
//       movie.votes + " ";

//     let upBtn = document.createElement("button");
//     upBtn.innerText = "Vote Up";
//     upBtn.addEventListener("click", function () {
//       movie.votes++;
//       renderMovies();
//     });

//     let downBtn = document.createElement("button");
//     downBtn.innerText = "Vote Down";
//     downBtn.addEventListener("click", function () {
//       movie.votes--;
//       renderMovies();
//     });

//     row.appendChild(text);
//     row.appendChild(upBtn);
//     row.appendChild(downBtn);

//     movielist.appendChild(row);
//   });
// }



//  learnig get resuest using fetch.................................................................................................................


// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(function(response) {
//     console.log("Got the response:", response);
//   });


// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(function(response) {
//     return response.json(); // converts response to JSON
//   })
//   .then(function(data) {
//     console.log("Got the data:", data);
//   });






// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(data) {
//     console.log(data);
//    console.log(data[0]);
//    console.log(data[0].title); 
//    console.log(data[0].body)
//    // If you want to print the title of every post:
//    data.forEach(function(post) {
//   console.log(post.title);
// });
//   });



// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(function(response) {
//     if (!response.ok) {
//       throw new Error("Server Error: " + response.status);
//     }
//     return response.json();
//   })
//   .then(function(data) {
//     console.log(data);
//   })
//   .catch(function(error) {
//     console.log("Error:", error.message);
//   });



// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(data) {
//     let postsContainer = document.getElementById("posts");

//     // Display only first 10 posts for clarity
//     data.slice(0, 10).forEach(function(post) {
//       let postDiv = document.createElement("div");
//       postDiv.className = "post";

//       let title = document.createElement("h3");
//       title.innerText = post.title;

//       let body = document.createElement("p");
//       body.innerText = post.body;

//       postDiv.appendChild(title);
//       postDiv.appendChild(body);
//       postsContainer.appendChild(postDiv);
//     });
//   })
//   .catch(function(error) {
//     console.log("Error:",error.message);
//   });



// let form = document.getElementById("postForm");

// form.addEventListener("submit", function(event) {
//   event.preventDefault();

//   let title = document.getElementById("title").value;
//   let body = document.getElementById("body").value;

//   fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       title: title,
//       body: body,
//       userId: 1
//     })
//   })
//     .then(function(response) {
//       if (!response.ok) {
//         throw new Error("Server error: " + response.status);
//       }
//       return response.json();
//     })
//     .then(function(data) {
//       let responseDiv = document.getElementById("response");
//       responseDiv.innerHTML = `
//         <h3>New Post Created</h3>
//         <p><strong>Title:</strong> ${data.title}</p>
//         <p><strong>Body:</strong> ${data.body}</p>
//         <p><strong>ID:</strong> ${data.id}</p>
//       `;
//     })
//     .catch(function(error) {
//       console.log("Error:", error.message);
//     });
// });




// fetch('https://the-trivia-api.com/api/questions?limit=1')
//   .then(response => response.json())
//   .then(data => {
//     const question = data[0];
//     console.log('Question:', question.text);
//     console.log('Correct Answer:', question.correctAnswer);
//     console.log('Category:', question.category);
//     console.log('Difficulty:', question.difficulty);
//   })
//   .catch(error => console.log('Error:', error.message));

// fetch('https://the-trivia-api.com/api/questions?limit=1')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data[0].question); // Check the structure of the returned data
//   })
//   .catch(error => console.log('Error:', error.message));




// const questionEl = document.getElementById("question");
// const metaEl = document.getElementById("meta");
// const answerEl = document.getElementById("answer");
// const errorEl = document.getElementById("error");

// const showAnswerBtn = document.getElementById("showAnswerBtn");
// const nextQuestionBtn = document.getElementById("nextQuestionBtn");

// let currentAnswer = "";

// // Fetch a random question
// async function fetchQuestion() {
//   try {
//     errorEl.innerText = "";
//     answerEl.innerText = "";

//     showAnswerBtn.disabled = false;
//     nextQuestionBtn.disabled = true;

//     const response = await fetch(
//       "https://the-trivia-api.com/v2/questions?limit=1"
//     );

//     // Server error handling
//     if (!response.ok) {
//       throw new Error("Server error: " + response.status);
//     }

//     const data = await response.json();

//     // Validate response
//     if (!Array.isArray(data) || data.length === 1) {
//       throw new Error("Unexpected API response");
//     }

//     const questionObj = data[0];

//     questionEl.innerText = questionObj.question.text;
//     metaEl.innerText = `Category: ${questionObj.category} | Difficulty: ${questionObj.difficulty}`;
//     currentAnswer = questionObj.correctAnswer;

//   } catch (error) {
//     errorEl.innerText = error.message;
//     questionEl.innerText = "";
//     metaEl.innerText = "";
//   }
// }

// // Show answer button
// showAnswerBtn.addEventListener("click", () => {
//   answerEl.innerText = "Answer: " + currentAnswer;
//   showAnswerBtn.disabled = true;
//   nextQuestionBtn.disabled = false;
// });

// // Next question button
// nextQuestionBtn.addEventListener("click", fetchQuestion);

// // Load first question on page load
// fetchQuestion();


// let question = document.getElementById("QuestionText");
// let categ = document.getElementById("cate");
// let ans = document.getElementById("ans");
// let err = document.getElementById("err");
// let showbtn = document.getElementById("showbtn");
// let nextbtn = document.getElementById("nextbtn");

// let correctAnswer = "";

// nextbtn.disabled = true;

// function loadQuestion() {
//   ans.innerText = "";
//   err.innerText = "";
//   showbtn.disabled = false;
//   nextbtn.disabled = true;

//   fetch("https://the-trivia-api.com/v2/questions?limit=1")
//     .then(res => res.json())
//     .then(data => {
//       question.innerText = data[0].question.text;
//       categ.innerText = `category: ${data[0].category} || difficulty: ${data[0].difficulty}`;
//       correctAnswer = data[0].correctAnswer;
//     })
//     .catch(e => {
//       err.innerText = e.message;
//     });
// }

// showbtn.addEventListener("click", () => {
//   ans.innerText = correctAnswer;
//   showbtn.disabled = true;
//   nextbtn.disabled = false;
// });

// nextbtn.addEventListener("click", loadQuestion);

// // first question
// loadQuestion();







//  <!-- web assessment 4.0 -->
  // <!-- question 2 -->

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

// // ---------------- STATE -------------
// let currentIndex = 0;

// function displayQuestion() {
//   let currentQuestion = questions[currentIndex];

//   questionNumber.innerText = "Question " + (currentIndex + 1);
//   questionText.innerText = currentQuestion.questionText;

//   // 1. Combine correct and incorrect answers
//   let allOptions = [
//     currentQuestion.correctAnswer,
//     ...currentQuestion.incorrectAnswers
//   ];

//   // 2. Shuffle options (Fisher-Yates shuffle)
//   for (let i = allOptions.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [allOptions[i], allOptions[j]] = [allOptions[j], allOptions[i]];
//   }

//   // 3. Display shuffled options
//   options.forEach((radio, index) => {
//     radio.checked = false;
//     radio.disabled = false;
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
// displayQuestion();
