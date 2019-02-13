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

    static addSearchedUserToStorage() {

    }

    static clearAllSearchedUserFromStorage() {

    }
}