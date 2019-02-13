class Storage {
    static getSearchedUserFromStorage() {
        let users;

        if (localStorage.getItem("users") === null) {
            users = [];
        } else {
            users = JSON.parse(localStorage.getItem("users"));
        }
        return users;
    }

    static addSearchedUserToStorage(username) {
        let users = this.getSearchedUserFromStorage();

        if (users.indexOf(username) === -1)
            users.push(username);

        localStorage.setItem("users", JSON.stringify(users));
    }

    static clearAllSearchedUserFromStorage() {

    }
}