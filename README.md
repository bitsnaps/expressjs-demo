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
