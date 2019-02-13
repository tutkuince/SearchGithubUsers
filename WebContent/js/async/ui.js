class UI {
    constructor() {
        this.profileDiv = document.getElementById("profile");
        this.reposDiv = document.getElementById("repos");
        this.lastUsers = document.getElementById("last-users");
        this.githubname = document.getElementById("githubname");
    }

    clearInput() {
        this.githubname.value = "";
    }
}