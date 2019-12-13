# Starter project RESTFUL API with : Express - Node.js - React - MySQL 

## Rescept the architecture
- Models/Controllers/Routes
- GET, POST, PUT, DELETE : A walkthrough with JavaScript’s Fetch API

## Tools 
 - Material UI
 - Bootstrap
 - file gitignore

### Step 1
 Clone the repo  and check if node-module is correctly installed
 
### Step 2 
  Create the DB. 
   1) ```mysql -u root -p```
   2) compile the file 'starter/back-app/stores/clients.sql' to create DB (name it as you want) and create the table 'clients'
 
### Step 3
  Create file 'db.config.js' in folder 'starter/back-app'
  ```
    module.exports = {
      HOST :  'localhost', 
      USER :  'root', 
      PASSWORD :  YOUR PASSWORD,
      DB :  YOUR DB
    }
```

### Step 4
 1) In 'front-app' : ```npm start```
 2) In 'back-app' : ``` node server.js```


 
