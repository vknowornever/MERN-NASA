# MERN-NASA

# package file automationg the process

## install the client packages inside the client folder
## --prefix will help npm to find the folder
## single '&' will run both the command together
## double '&&' will exectue the command in sequence (will wait for one to complete before starting to execute another) 
    "install-clinet" : "npm install --prefix client", 
    "install-server" : "npm install --prefix server",
    "install" : "npm run install-client && npm run install-server",
    "server": "npm run watch --prefix server",
    "client": "npm start --prefix client",
    "watch": "npm run client & npm run server",
    "test": "echo \"Error: no test specified\" && exit 1"