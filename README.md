# Building Blocks Express.js

# Steps:

- Create the app:
```
npm init
```

Install Express.js (latest version 4.*):
```
npm install express@4 --save
```

- Optional: fix packages versions (prevent npm install to download
different packages version):
```
npm shrinkwrap
```
- We created the file: bin/www.js to run (or test the app) using:
```
node bin/www
```
- Install supertest for testing (it's not runtime dependency so we add --save-dev and it wont be shrinkwrapped):
```
npm install supertest --save-dev
```

Install mocha testing description and better output:
```
npm install mocha --save-dev
```
then add a script command to package.json
```
"test": "mocha test.js"
```
now you're ready to run test with mocha using:
```
npm test
```
Add automated testing script:
```
"auto-test": "mocha -w app.js test.js"
```
run automated testing:
```
npm run auto-test
```
Add running command:
```
"start": "node bin/www.js",
```
now you can run the app:
```
npm run start
```

Deploy to Heroku
1- create an app:
```
heroku create
```
2- create then add and commit the `Procfile` with this content:
```
web: ./bin/www
```
3- Push the code to the created heorku remote master branch:
```
git push heroku master
```
4- Fix port number on heorku by add this line to ./bin/www.js:
```
var port = process.env.PORT || 3000;
```
5- Open the app from command line:
```
heroku open
```

P.S. if you get error when deploying to heroku make sure environment variables and settings are defined correctly:
https://dev.to/lawrence_eagles/causes-of-heroku-h10-app-crashed-error-and-how-to-solve-them-3jnl


Install body-parser to parse json (we do shrinkwrap to save body-parser):
```
npm install body-parser --save
npm shrinkwrap
```
