class UI {
    constructor() {
        this.profileDiv = document.getElementById("profile");
        this.reposDiv = document.getElementById("repos");
        this.lastUsers = document.getElementById("last-users");
        this.githubname = document.getElementById("githubname");
        this.cardBody = document.getElementsByClassName("card-body")[0];
    }

    clearInput() {
        this.githubname.value = "";
    }

    showUserInfo(user) {
        this.profileDiv.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                  <div class="col-md-4">
                    <a href="" target = "_blank">
                     <img class="img-fluid mb-2" src="${user["avatar_url"]}"> </a>
                     <hr>
                     <div id="fullName"><strong> ${user["name"]}</strong></div>
                     <hr>
                     <div id="bio">${user["bio"]}</div>
                    </div>
                  <div class="col-md-8">
                        <button class="btn btn-secondary">
                              Followers  <span class="badge badge-light">${user["followers"]}</span>
                        </button>
                        <button class="btn btn-info">
                             Following  <span class="badge badge-light">${user["following"]}</span>
                          </button>
                        <button class="btn btn-danger">
                            Repositories  <span class="badge badge-light">${user["public_repos"]}</span>
                        </button>
                        <hr>
                        <li class="list-group">
                            <li class="list-group-item borderzero">
                                <img src="images/company.png" width="30px"> <span id="company">${user["company"]}</span>
                            </li>
                            <li class="list-group-item borderzero">
                                <img src="images/location.png" width="30px"> <span id = "location">${user["location"]}</a>
                            </li>
                            <li class="list-group-item borderzero">
                                <img src="images/mail.png" width="30px"> <span id="company">${user["email"]}</span>
                            </li>
                        </div>
                  </div>
            </div>
        `;
    }

    showReposInfo(repos) {
        this.reposDiv.innerHTML = "";
        repos.forEach(repo => {
            this.reposDiv.innerHTML += `
               <div class="mb-2 card-body">
                   <div class="row">
                       <div class="col-md-2">
                       <span></span>
                       <a href="${repo["html_url"]}" target = "_blank" id = "repoName">${repo["name"]}</a>
                       </div>
                       <div class="col-md-6">
                           <button class="btn btn-secondary">
                               Stars  <span class="badge badge-light" id="repoStar">${repo["stargazers_count"]}</span>
                           </button>
                           <button class="btn btn-info">
                               Forks  <span class="badge badge-light" id ="repoFork">${repo["forks_count"]}</span>
                           </button>
                       </div>
                    </div>
                </div>
            `;
        });
    }

    showError(message, type) {
        const div = document.createElement("div");
        div.className = `alert alert-${type}`;
        div.textContent = message;
        this.cardBody.appendChild(div);

        setTimeout(function () {
            div.remove();
        }, 3000);
    }

    showLastUsers(username) {
        this.lastUsers.innerHTML += `
            <li class="list-group-item">${username}</li>
        `;
    }
}