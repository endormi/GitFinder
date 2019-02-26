const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");
const nameContainer = document.querySelector(".main__profile-name");
const unContainer = document.querySelector(".main__profile-username");
const reposContainer = document.querySelector(".main__profile-repos");
const urlContainer = document.querySelector(".main__profile-url");

// Using the application's tokens
const client_id = "Iv1.ca05a9878764193f";
const client_secret = "d8dd5d4d24c03db27fd3e1911fbfcc8d1a2b0b60";

// async await makes the http requests
const fetchUsers = async (user) => {
    const api_call = await fetch(`https://api.github.com/users/${user}
    ?client_id=${client_id}&client_secret=${client_secret}`); // ES6 template strings

    // converts the given data into an json file
    const data = await api_call.json();
    return { data } // Key and the value are the same, so you can use { data } (ES6 feature) instead of { data: ... }    
};

// Fetch data
const showData = () => {
    fetchUsers(inputValue.value).then((res) => {
        // ${res.data.} then GitHub's API property
        nameContainer.innerHTML = `Name: <span class="main__profile-value">${res.data.name}</span>`;
        unContainer.innerHTML = `Username: <span class="main__profile-value">${res.data.login}</span>`;
        reposContainer.innerHTML = `Repositories: <span class="main__profile-value">${res.data.public_repos}</span>`;
        urlContainer.innerHTML = `URL: <a href="${res.data.html_url}"><span class="main__profile-value">${res.data.html_url}</span></a>`;
    })
};

searchButton.addEventListener("click", () => {
    showData();
})