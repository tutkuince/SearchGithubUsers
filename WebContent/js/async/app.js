// async, await

// Select elements
const form = document.getElementById("github-form");
const githubname = document.getElementById("githubname");
const clearLastUsers = document.getElementById("clear-last-users");


eventListeners();

function eventListeners() {
    form.addEventListener("submit", getData);


}


function getData(e) {
    const username = githubname.value;
    console.log(username);

    e.preventDefault();
}