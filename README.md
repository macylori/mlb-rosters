# mlb-rosters

## How to Run Application

First, clone the repository using the command below.

```
git clone https://github.com/macylori/mlb-rosters
```

Then navigate to the application source folder.

```
cd mlb-rosters/mlb-rosters/src
```
Next, add the API key to the config.js

```
nano config.js
```
Add the API key in single quotes next to the API config.

Ex: API_KEY = 'my-api-key'

Then, install dependencies.

```
npm install
```

Finally, start the application.

```
npm start
```

This will automatically open the application in your default browser. To get to the team list, use ```/teams``` at the end of your localhost URL.

Ex: http://localhost:3000/teams
