class Github {
    constructor() {
        this.url = "https://api.github.com/users/";
    }

    async getGithubData(username) {
        const response = await fetch(this.url + username);
        const data = response.json();
        return data;
    }
}