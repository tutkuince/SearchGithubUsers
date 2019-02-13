class Github {
    constructor() {
        this.url = "https://api.github.com/users/";
    }

    async getGithubData(username) {
        const responseData = await fetch(this.url + username);
        const responseRepo = await fetch(this.url + username + "/repos");

        const userData = await responseData.json();
        const repoData = await responseRepo.json();

        return {
            user: userData,
            repo: repoData
        }
    }
}