// let btn = document.getElementById("btn");
// let Timer = document.getElementById("timer");
// let Light = document.getElementById("light");

// async function Timer_function(time, color) {
//     return new Promise((resolve) => {
//         let second = time / 1000;
//         Light.style.backgroundColor = color;
//         Timer.innerText = `Time out: ${second}`;

//         let intervalId = setInterval(() => {
//             second--;
//             Timer.innerText = `Time out: ${second}`;

//             if (second === 0) {
//                 clearInterval(intervalId);
//                 resolve();
//             }
//         }, 1000);
//     });
// }

// async function manager() {
//     await Timer_function(6000, "green");
//     await Timer_function(2000, "yellow");
//     await Timer_function(6000, "red");

//     Timer.innerText = "Cycle complete";
//     btn.disabled = false;
// }

// btn.addEventListener("click", () => {
//     btn.disabled = true;
//     manager();
// });




//  challenge 2.................................................

// let btn = document.getElementById("btn");
// let para = document.getElementById("para");

// function step(time, message) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             para.innerText = message;

//             // 30% chance to fail
//             if (Math.random() < 0.3) {
//                 reject();   // ❌ step failed
//             } else {
//                 resolve();  // ✅ step success
//             }

//         }, time);
//     });
// }

// async function manager() {
//     btn.disabled = true;
//     para.style.color = "black";

//     try {
//         await step(3000, "Uploading file...");
//         await step(2000, "Processing file...");
//         await step(2000, "Saving result...");

//         para.innerText = "Upload successful!";
//         para.style.color = "green";

//     } catch {
//         para.innerText = "Upload failed! Please try again.";
//         para.style.color = "red";
//     }

//     btn.disabled = false;
// }

// btn.addEventListener("click", manager);
