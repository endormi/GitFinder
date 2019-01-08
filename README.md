# GitFinder

> Find and Fetch user information with GitHub's API using plain javascript, only by entering a username.

In case anyone wants to try this out, I have included starter files.

## Running the Project Locally

Clone the repository to your local machine:

```
git clone https://github.com/endormi/GitFinder.git
```

### Application

First you must create an [application](https://github.com/settings/apps), all you need to worry about for now is the url's. I personally used **http://127.0.0.1:8080** for the site and webhook url (it's up to you).

Once the application is created, you are provided with client id and client secret tokens which you then need to apply to your app.js file

```
const client_id = "your_token";
const client_secret = "your_token";
```

### Commands

Next thing is to open your terminal of choice and install modules

```
npm install
```

After the modules are installed, you must get the server up and running (-g stands for global)

```
npm install live-server -g
```

To run the server 

```
live-server
```

If you wish to edit the styling of the page

```
npm start
```

And then apply your preferred edits.

### Using GitHub's API

To use GitHub's API, you obviously need to fetch the API from GitHub. (Url is continuous)

```
const fetchUsers = async (user) => {
    const api_call = await fetch(`https://api.github.com/users/${user}?client_id=$
    {client_id}&client_secret=${client_secret}`);
```

> ${user} links (user) from const fetchUsers

While you have the api_call, it doesn't know what file it is.

```
const data = await api_call.json();
    return { data }
```

> JSON is a syntax for storing and exchanging data.

Span class is for styling purposes. To show data on the website.

```
const showData = () => {
    fetchUsers(inputValue.value).then((res) => {
        nameContainer.innerHTML = `Name: <span class="main__profile-value">${res.data.name}</span>`;
        unContainer.innerHTML = `Username: <span class="main__profile-value">${res.data.login}</span>`;
        reposContainer.innerHTML = `Repositories: <span class="main__profile-value">${res.data.public_repos}</span>`;
        urlContainer.innerHTML = `URL: <span class="main__profile-value">${res.data.html_url}</span>`;
    })
};
```

A small part of GitHub's JSON code as an example

``` 
{
  "login": "endormi",
  "url": "https://api.github.com/users/endormi",
  "html_url": "https://github.com/endormi",
  "followers_url": "https://api.github.com/users/endormi/followers",
  "following_url": "https://api.github.com/users/endormi/following{/other_user}",
  "gists_url": "https://api.github.com/users/endormi/gists{/gist_id}",
  "repos_url": "https://api.github.com/users/endormi/repos",
  "name": "",
}
```

## License

The source code is released under the [MIT License](https://github.com/endormi/GitFinder/blob/master/LICENSE).