## Distance Between Coordinates

Tech used:

- javascript ES6
- webpack
- webpack-dev-server
- babel
- react
- jquery
- lodash
- karma
- jasmine
- sinon
- eslint


## Install and Run
```bash
git clone git@github.com:ppalomar/distance-coordinates.git
cd distance-coordinates

# Install Node.js or update it to the latest version

# new installation
https://nodejs.org/en/
use version 6.x

# if you need only an upgrade
npm cache clean -f
npm install -g n
n stable

# Install dependencies
npm install

# run and watch for changes
npm start

# Applciation url: http://localhost:8080/webpack-dev-server

# sometimes webpack-dev-server fails on windows depend on the node version and windows architecture, if fails do this:
 webpack --progress --colors --watch

# And open in a browser the file index.html

# Expected result -> Aberdeen, Belfast, Birmingham, Cardiff, Cork (city), Douglas, Dublin, Edinburgh, Glasgow, Greenwich, Leeds, Liverpool, London, Manchester

# Also in the Console of the browser we can see the distance of each city from Dublin in a format like: 'From: Dublin To: Madrid Distance: 1451.1880462200738 km' 

## Execute unit tests
npm test

# Test create a folder of coverage each time is ran
```
