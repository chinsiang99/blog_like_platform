# Blog Post Application

### `Introduction`
<p align="justify">It is an blog sharing web application that lets you interact with the blog shared by different users of the application and also lets you create your own blog post. The App allows users to interact with the blog posts with likes and comments. Users will also be able to create accounts, authenticate and authorize in the web application</p>

### `Goals`
<ul align="justify">
  <li>Let users login or signup to the application with email and passwords with firebase acting backend and enabling the sign-in method using email and password in Firebase authentication .</li>
  <li>Users should be automatically routed to the main page if they are already logged in with the help of firebase sessions and cookies, if not the login page should be shown.</li>
  <li>Users will be able to see the different blog posts of different people and interact with it. User will have two interaction button for next blog or previous blog. Users can create their own blog posts with the help of menu navigation</li>
  <li>Users should be able to like or comment on others blog posts which needs to be handled with CRUD operations in firebase</li>
  <li>Users should have a valid access token to use the private endpoints.</li>
  <li>The blog posts should be paginated i.e. users can toggle to the next page containing different blog posts when clicking on the next blog button on homepage view.</li>
  <li>Users password should not be stored as raw password in the Database.</li>
  <li>Users should be able to create their own blog posts with contents, pictures or videos. </li>
</ul>

### `Tools & Libraries`

<ul align="justify">
  <li>Node.js : ( module: http, path )</li>
  <li>Express : Use to get robust features to build web application using node.js (router, body parser, request params)</li>
  <li>Dotenv : Used to access the environment variables via node.js process core module into our files</li>
  <li>Express-async-handler : Middleware used to handle exceptions inside of async express routes and passing them to your express error handlers</li>
  <li>Jsonwebtoken : Used to add authentication to the apis by signing and verifying the access token.</li>
  <li>Firebase : It is an app development platform and used as a real time database and authentication of users.</li>
  <li>Multer : Use to handle form/multipart request to create blog post with images. </li>
  <li>Nodemon : Used to detect the changes in file and restart the server automatically, especially used for development purposes.</li>
  <li>ejs : View engine for displaying the front-end. </li>
</ul>

## Steps to Get Started

### `1) Clone repository`

Please run git clone `https://github.com/chinsiang99/blog_like_platform.git`

### `2) Install Packages`

Please run `npm install` after cloning the repository

### `3) Make your own .env file`

Create a .env file that contains database string connection and jwt token secret

### `4) Done`

Run `npm run dev` to start the application

## Routes Used

### `registerRoutes`

`GET: /register` (Public Route) - get register account page

`POST: /register` (Public Route) - register a new account

### `loginRoutes`

`GET: /login` (Public Route) - get login page

`POST: /login` (Public route) - authenthicate the user and log in

### `homeRoutes`

`GET: /home` (Public Route) - get home page

### `blogRoutes`

`GET: /blog` (Private Route) - get create blogpost page

`POST: /blog` (Private route) - create blogpost and put it in database

### `commentRoutes`

`POST: /comment` (Private Route) - post comment

### `likeRoutes`

`POST: /like` (Private Route) - like blog post

`POST: /like/unlike` (Private route) - unlike blog post
## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Test the application starting with http://localhost:4000