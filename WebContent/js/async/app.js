// async, await

// Select elements
const form = document.getElementById("github-form");
const githubName = document.getElementById("githubName");
const clearLastUsers = document.getElementById("clear-last-users");


// Event listeners
eventListeners();

function eventListeners() {
    form.addEventListener("submit", getData);
    document.addEventListener("DOMContentLoaded", showLastUsers);
    clearLastUsers.addEventListener("click", clearAllSearched);

}

// init github object
const github = new Github();
const ui = new UI();

function getData(e) {
    let username = githubName.value.trim();

    if (username === "")
        alert("Please enter a valid username");
    else {
        github.getGithubData(username)
            .then(response => {
                if (response.user.message === "Not Found"){
                    ui.showError("User not found", "warning");
                    console.log("Error");
                } else {
                    ui.showUserInfo(response.user);
                    ui.showReposInfo(response.repo);
                    if (Storage.addSearchedUserToStorage(username))
                        ui.showLastUsers(username);
                }
            })
            .catch(err => console.log(err));
    }
    ui.clearInput();

    e.preventDefault();
}

function showLastUsers() {
    Storage.getSearchedUserFromStorage().forEach(u => ui.showLastUsers(u));
}

function clearAllSearched() {
    if (confirm("Would you like to delete all users?")) {
        Storage.clearAllSearchedUserFromStorage();
        ui.clearAllSearchedFromUI();
    }
}