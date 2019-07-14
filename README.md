# GitFinder

[Website](http://endormi.io/GitFinder/)

> Find and Fetch user information with GitHub's API using plain javascript, only by entering a username.

## Running the Project Locally

Clone the repository to your local machine:

```sh
git clone https://github.com/endormi/GitFinder.git
```

### Application

First you must create an [application](https://github.com/settings/apps), all you need to worry about for now is the url's. I personally used **http://127.0.0.1:8080** for the site and webhook url (it's up to you).

More detailed explanation of the application url:

Homepage URL | User authorization callback URL  | Webhook URL
------------- | ------------- | -------------
http://127.0.0.1:8080 | http://127.0.0.1:8080 | http://127.0.0.1:8080

Once the application is created, you are provided with client id and client secret tokens which you then need to apply to your app.js file

```javascript
const client_id = "your_token";
const client_secret = "your_token";
```

#### Install live-server

Get the server up and running (`-g` stands for global)

```sh
npm install live-server -g
```

To run the server

```sh
live-server
```

#### Using GitHub's API

To use GitHub's API, you obviously need to fetch the API from GitHub. (URL is continuous)

```javascript
const fetchUsers = async (user) => {
    const api_call = await fetch(`https://api.github.com/users/${user}?client_id=$
    {client_id}&client_secret=${client_secret}`);
```

A small part of GitHub's JSON code as an example

```javascript
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

**ONLY Public Repositories**

## License

The source code is released under the [MIT License](https://github.com/endormi/GitFinder/blob/master/LICENSE).
