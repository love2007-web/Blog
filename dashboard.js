// import { user } from "./script.js";
let dashboardWelcome = document.getElementById("welcome");
// dashboardWelcome.innerHTML = `<h1 class="dashboard-welcome"> Welcome, ${user.username}! <h1>`;


// Get the welcome div and the logout button
let welcomeDiv = document.getElementById("welcome");
let logoutBtn = document.getElementById("logout-btn");

// Get the current user information from localStorage
let currentUser = JSON.parse(localStorage.getItem("currentUser"));

// If there is no current user, redirect to the login page
if (!currentUser) {
  window.location.href = "index.html";
}

// Display the welcome message with the current user's name
dashboardWelcome.innerHTML = `<h2>Welcome to your dashboard , ${currentUser.username}!</h2>`;

// Handle the logout process
logoutBtn.addEventListener("click", () => {
  // Remove the current user from localStorage and redirect to the login page
  localStorage.removeItem("currentUser");
  window.location.href = "index.html";
});

let blogTitle = document.getElementById('blogTitle');
let blogContent = document.getElementById('blogContent');
let postwrapper = document.getElementById('postwrapper')
let viewwrapper = document.getElementById('posted')
let date = new Date
console.log(date);
// postwrapper.style.display = 'none'

function post() {
  viewwrapper.innerHTML = `
  <h1>${blogTitle.value}</h1>
  <h6>${blogContent.value}</h6>
  <p>Posted on ${date}</p>
  <div>
  <button class="btn1">Like</button>
  <button class="btn1">Unlike</button>
  </div>
  `
}


function postBlog() {
  postwrapper.style.display = 'block'

}


function viewPost() {
  // viewwrapper.style.display = 
}