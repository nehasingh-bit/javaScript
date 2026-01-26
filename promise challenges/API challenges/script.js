
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





// const searchInput = document.getElementById("searchInput");
// const searchBtn = document.getElementById("searchBtn");

// const titleEl = document.getElementById("title");
// const yearEl = document.getElementById("year");
// const typeEl = document.getElementById("type");
// const ratingEl = document.getElementById("rating");
// const posterEl = document.getElementById("poster");
// const plotEl = document.getElementById("plot");
// const errorMsg = document.getElementById("errorMsg");

// const API_KEY = "665e84dd";

// // Clear old data
// function clearDetails() {
//   titleEl.textContent = "";
//   yearEl.textContent = "";
//   typeEl.textContent = "";
//   ratingEl.textContent = "";
//   posterEl.innerHTML = "";
//   plotEl.textContent = "";
// }

// searchBtn.addEventListener("click", () => {
//   const movieName = searchInput.value.trim();

//   // Clear previous results
//   clearDetails();
//   errorMsg.textContent = "";

//   // Empty input check
//   if (movieName === "") {
//     errorMsg.textContent = "Please enter a movie or series name.";
//     return;
//   }

//   const url = `https://www.omdbapi.com/?t=${encodeURIComponent(
//     movieName
//   )}&apikey=${API_KEY}`;

//   fetch(url)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network error");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       if (data.Response === "False") {
//         errorMsg.textContent = "Movie or series not found.";
//         return;
//       }

//       titleEl.textContent = `Title: ${data.Title}`;
//       yearEl.textContent = `Year: ${data.Year}`;
//       typeEl.textContent = `Type: ${data.Type}`;
//       ratingEl.textContent = `IMDb Rating: ${data.imdbRating}`;
//       plotEl.textContent = `Plot: ${data.Plot}`;

//       if (data.Poster === "N/A") {
//         posterEl.textContent = "No poster available";
//       } else {
//         const img = document.createElement("img");
//         img.src = data.Poster;
//         img.alt = data.Title;
//         posterEl.appendChild(img);
//       }
//     })
//     .catch((error) => {
//       clearDetails();
//       errorMsg.textContent =
//         "Something went wrong. Please try again later.";
//       console.error(error);
//     });
// });





// // const cityInput = document.getElementById("cityInput");
// // const weatherBtn = document.getElementById("weatherBtn");

// // const cityEl = document.getElementById("city");
// // const countryEl = document.getElementById("country");
// // const temperatureEl = document.getElementById("temperature");
// // const windspeedEl = document.getElementById("windspeed");
// // const errorMsg = document.getElementById("errorMsg");

// // // clear old data
// // function clearData() {
// //   cityEl.textContent = "";
// //   countryEl.textContent = "";
// //   temperatureEl.textContent = "";
// //   windspeedEl.textContent = "";
// // }

// // weatherBtn.addEventListener("click", () => {
// //   const cityName = cityInput.value.trim();

// //   clearData();
// //   errorMsg.textContent = "";

// //   // Empty input check
// //   if (cityName === "") {
// //     errorMsg.textContent = "Please enter a city name.";
// //     return;
// //   }

// //   // Step 1: Geocoding API (City → Latitude & Longitude)
// //   const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
// //     cityName
// //   )}`;

// //   fetch(geoUrl)
// //     .then((response) => {
// //       if (!response.ok) {
// //         throw new Error("Geocoding API failed");
// //       }
// //       return response.json();
// //     })
// //     .then((geoData) => {
// //       if (!geoData.results || geoData.results.length === 0) {
// //         errorMsg.textContent = "City not found.";
// //         return;
// //       }

// //       const cityData = geoData.results[0];
// //       const latitude = cityData.latitude;
// //       const longitude = cityData.longitude;
// //       const country = cityData.country;

// //       // Step 2: Weather API (Coordinates → Weather)
// //       const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

// //       fetch(weatherUrl)
// //         .then((response) => {
// //           if (!response.ok) {
// //             throw new Error("Weather API failed");
// //           }
// //           return response.json();
// //         })
// //         .then((weatherData) => {
// //           if (!weatherData.current_weather) {
// //             errorMsg.textContent = "Weather data not available.";
// //             return;
// //           }

// //           cityEl.textContent = `City: ${cityData.name}`;
// //           countryEl.textContent = `Country: ${country}`;
// //           temperatureEl.textContent = `Temperature: ${weatherData.current_weather.temperature} °C`;
// //           windspeedEl.textContent = `Windspeed: ${weatherData.current_weather.windspeed} km/h`;
// //         })
// //         .catch((error) => {
// //           clearData();
// //           errorMsg.textContent = "Failed to fetch weather data.";
// //           console.error(error);
// //         });
// //     })
// //     .catch((error) => {
// //       clearData();
// //       errorMsg.textContent = "Something went wrong. Please try again.";
// //       console.error(error);
// //     });
// // });





// const searchInput = document.getElementById("searchInput");
// const searchBtn = document.getElementById("searchBtn");
// const newsContainer = document.getElementById("newsContainer");
// const errorMsg = document.getElementById("errorMsg");

// const API_KEY = "12fe54e8003f4fd686db46853a7ee131";
//  const BASE_URL ="https://newsapi.org/v2/everything";


// searchBtn.addEventListener("click", () => {
//   const keyword = searchInput.value.trim();

//   // Clear previous data
//   newsContainer.innerHTML = "";
//   errorMsg.textContent = "";

//   // Empty input check
//   if (keyword === "") {
//     errorMsg.textContent = "Please enter a search keyword.";
//     return;
//   }

//   const url = `${BASE_URL}?q=${encodeURIComponent(
//     keyword
//   )}&pageSize=9&apiKey=${API_KEY}`;

//   fetch(url)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("API request failed");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       if (!data.articles || data.articles.length === 0) {
//         errorMsg.textContent = "No news found for that keyword.";
//         return;
//       }

//       data.articles.forEach((article) => {
//         const card = document.createElement("div");
//         card.className = "card";

//         card.innerHTML = `
//           <img src="${
//             article.urlToImage || ""
//           }" alt="No Image Available">
//           <h3>${article.title}</h3>
//           <p><strong>Source:</strong> ${
//             article.source.name
//           }</p>
//           <p>${article.description || "No description available."}</p>
//         `;

//         newsContainer.appendChild(card);
//       });
//     })
//     .catch((error) => {
//       newsContainer.innerHTML = "";
//       errorMsg.textContent =
//         "Something went wrong. Please try again later.";
//       console.error(error);
//     });
// });








// const submitBtn = document.getElementById("submitBtn");
// const errorMsg = document.getElementById("errorMsg");
// const confirmation = document.getElementById("confirmation");

// submitBtn.addEventListener("click", () => {
//   errorMsg.textContent = "";
//   confirmation.innerHTML = "";

//   const name = document.getElementById("name").value.trim();
//   const age = Number(document.getElementById("age").value);
//   const grade = document.getElementById("grade").value;
//   const scholarship = document.getElementById("scholarship").checked;

//   const subjectCheckboxes = document.querySelectorAll(".subject");
//   const favoriteSubjects = [];

//   subjectCheckboxes.forEach((box) => {
//     if (box.checked) {
//       favoriteSubjects.push(box.value);
//     }
//   });

//   // ✅ Validation
//   if (name === "") {
//     errorMsg.textContent = "Name cannot be empty.";
//     return;
//   }

//   if (age <= 0) {
//     errorMsg.textContent = "Age must be a positive number.";
//     return;
//   }

//   if (favoriteSubjects.length === 0) {
//     errorMsg.textContent = "Select at least one favorite subject.";
//     return;
//   }

//   // ✅ Student object
//   const studentData = {
//     name: name,
//     age: age,
//     grade: grade,
//     favoriteSubjects: favoriteSubjects,
//     hasScholarship: scholarship,
//   };

//   fetch("https://httpbin.org/post", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(studentData),
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Request failed");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       const savedStudent = data.json;

//       confirmation.innerHTML = `
//         <h3>Student Registered Successfully </h3>
//         <p><strong>Name:</strong> ${savedStudent.name}</p>
//         <p><strong>Grade:</strong> ${savedStudent.grade}</p>
//         <p><strong>Subjects:</strong> ${savedStudent.favoriteSubjects.join(", ")}</p>
//         <p><strong>Scholarship:</strong> ${
//           savedStudent.hasScholarship ? "Yes" : "No"
//         }</p>
//       `;
//     })
//     .catch(() => {
//       confirmation.innerHTML = "";
//       errorMsg.textContent =
//         "Could not save student. Please try again.";
//     });
// });


























































































