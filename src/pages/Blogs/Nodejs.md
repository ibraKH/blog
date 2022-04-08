---
setup: |
    import Layout from '../../layouts/BlogLayout.astro';
name: Nodejs
title: Nodejs Blog
image: https://www.kojac.nl/tailwind/images/Backend/nodejs.png
avatar: http://localhost:4000/avatar.png
description: In this blog, will discuss and learn about Nodejs and its use , the libraries and frameworks
---


### Node.js is :

#### an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. 

#### Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. 

#### Consequently, Node.js represents a "JavaScript everywhere" paradigm, unifying web-application development around a single programming language, rather than different languages for server-side and client-side scripts.

<p align="center">
<img src="https://www.kojac.nl/tailwind/images/Backend/nodejs.png" alt="nodejs" height="200" width="200" />
</p>


#### Nodejs have so many libraries and frameworks , the most used one are

# <br>


# 1- <a href="https://www.npmjs.com/package/express">Express</a>


#### Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs 

#### It has been called the de facto standard server framework for Node.js.
``` javascript
const express = require("express");
const app = express();

const PORT = process.env.PORT || 4000;


app.get("/", (req , res) => {
    res.send("Hello From Nodejs Blog")
});

app.listen(PORT, err => err ? console.log(err) : console.log("listenning"));

```
<p align="center">
<img src="https://expressjs.com/images/express-facebook-share.png" alt="expressjs" height="120">
</p>

# <br>

# 2- <a href="https://www.npmjs.com/package/socket.io">Socket.io</a>


#### Socket.io is a event-driven JavaScript library for real-time web applications. 

#### It enables real-time, bi-directional communication between web clients and servers. It has two parts: a client-side library that runs in the browser, and a server-side library for Node.js. Both components have a nearly identical API.

<p align="center">
<img src="https://miro.medium.com/max/812/0*xAADmPJN52Yy6XJV.jpg" alt="expressjs" height="150" >
</p>