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
- Install supertest for testing:
```
npm install supertest --save-dev
```

