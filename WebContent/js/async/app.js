// async, await

// Select elements
const form = document.getElementById("github-form");
const githubname = document.getElementById("githubname");
const clearLastUsers = document.getElementById("clear-last-users");


// Event listeners
eventListeners();

function eventListeners() {
    form.addEventListener("submit", getData);


}

// init github object
const github = new Github();
const ui = new UI();

function getData(e) {
    let username = githubname.value.trim();

    if (username === "")
        alert("Please enter a valid username");
    else {
        github.getGithubData(username)
            .then(response => {
                if (response.user.message === "Not Found"){
                    ui.showError("User not found", "warning");
                    console.log("Error");
                } else {
                    console.log(response);
                    ui.showUserInfo(response.user);
                    ui.showReposInfo(response.repo);
                }
            })
            .catch(err => console.log(err));
    }
    ui.clearInput();

    e.preventDefault();
}