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
console.log(String(date.getDate()) + ' ' + String(date.getMonth()+1) + ' ' + String(date.getFullYear()));

// postwrapper.style.display = 'none'

function post() {
  let postArr = JSON.parse(localStorage.getItem("saved")) || [];;
  let postObj = {
    blogTitle: blogTitle.value,
    blogContent: blogContent.value,
    time: String(date.getDate()) + ' ' + String(date.getMonth()+1) + ' ' + String(date.getFullYear()),
  };
  postArr.push(postObj);

  viewwrapper.innerHTML += `
 <div class="done bg-primary rounded">
 <h1>${postObj.blogTitle}</h1>
 <h6>${postObj.blogContent}</h6>
 <p>Posted on ${postObj.time}</p><br>
 <div class="btn1wrapper">
 <button id='like' class="btn1" onclick="like()">Like</button>
 <button id="unlike" class="btn1" onclick="unlike()">Unlike</button>
 </div>
 </div>
  `
  
  postwrapper.style.display = 'none'
  viewwrapper.style.display = 'block'
}


function postBlog() {
  postwrapper.style.display = 'block'
  viewwrapper.style.display = 'none'

}


function viewPost() {
  viewwrapper.style.display = 'block'
  postwrapper.style.display = 'none'
}
function like() {
  let likedArr = JSON.parse(localStorage.getItem("saved")) || [];
  if (document.getElementById('like').style.backgroundColor != 'blue') {
    document.getElementById('like').style.backgroundColor = 'blue'
  }else{
    document.getElementById('like').style.backgroundColor = 'brown'
  }
}
function unlike() {
  
  if (document.getElementById('unlike').style.backgroundColor != 'blue') {
    document.getElementById('unlike').style.backgroundColor = 'blue'
  }else{
    document.getElementById('unlike').style.backgroundColor = 'brown'
  }
}