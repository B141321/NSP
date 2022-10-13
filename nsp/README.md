# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Project work flow
=> NATIONAL SCHOLARSHIP PORTAL Project contains different pages those are
    1) Home page
    2) Registration page
    3) Student Registration page
    4) Student registration sucessful page
    5) Institute Registration page
    6) Institute registration sucessful page
    7) Student Home page after sucessful login
    8) Student Scholarship regristration page
    9) Institute Home page after sucessful login
    10) State Nodal Home page after sucessful login
    11) Ministry Home page after sucessful login

=> When we load the project using 'npm start' command the app.js file will render and display  different pages when we start redirecting.

=> For redirectring between pages we have used React Router concept.

=> To install router dependencies we need to run command 'npm install react-router-dom@6' 

=> Then we get router dependencies into our project.

=> To use router we need to import {BrowserRouter as Router, Route, Routes,} from 'react-router-dom'; in our file.

=> The Router will open required components using Route.

=> In route we need to bind components which are imported and needed to display in dom.

=> To navigate between differnt file we need to import another module 'LINK' from 'react-router-dom'.

=> import { Link} from "react-router-dom";

=> By using link tag we can redirect between pages.

=> For that we need to use 'to' class

=> Syntax will look like <Link to='/requiredpage'></Link>

=> After using link we have to give same path in route. EX: <Route exact path='/RegisterStudent' element={<Register/>}/>

=> By this we can redirect between pages

=> In the home page for the login purpose we have used dummy credentials 

=> Those credentials for differnt logins are

    => For student login
        UNIQUE ID : 505115804156
        PASSWORD  : 123456

    => For Institute login
        UNIQUE ID : B141321
        PASSWORD  : 123456
    
    => For State nodal login
        UNIQUE ID : B141954
        PASSWORD  : 123456
    
    => For Ministry login
        UNIQUE ID : B141701
        PASSWORD  : 123456

        NOTE: If you enter another login credentials except these you will get an alert such

        wrong id and password

        or if you miss any one of ID and password you will get an alert of required those

For this validation we have used -if elseif else- conditions  and event handelr onClick and handel function

For styling of pages we have used bootstrap grid system. It contains 12 column system and we have used them depends upon style required
and for other styling we have write css code on index.css file

to load bootstrap we need to place script in index.html  head tag  in public folder
 the script is:  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"                integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
     <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
     <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
     <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>

     the above is bootstrap script to load bootstrap class

     used bootstrap classes in this project are 'container', 'row' , 'col' ,'btn btn-primary' 

     container used to make grid rows and columns and row used to make rows and col is used to columns in large devices and btn btn-primary is used to style button.

