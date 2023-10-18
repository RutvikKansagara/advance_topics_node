# Performance optimization in Node js

   ## 1. Always Use Asynchronous Functions
  - Async functions are like the heart of JavaScript. So, the best we can do to optimize CPU usage is to write asynchronous functions to perform nonblocking I/O operations.

  - I/O operations include the processes which perform read and write data operations. It can be the database, cloud storage, or any local storage disk on which the I/O operations are performed.

  - Using asynchronous functions in an application that heavily uses I/O operations will improve it. This is because the CPU will be able to handle multiple requests simultaneously due to non-blocking I/O, while one of these requests is making an Input/Output operation.

Here's an example:
```
var fs = require('fs');
// Performing a blocking I/O
var file = fs.readFileSync('/etc/passwd');
console.log(file);
// Performing a non-blocking I/O
fs.readFile('/etc/passwd', function(err, file) {
    if (err) return err;
    console.log(file);
});
```
We use the fs Node package to work with files.

 - `readFileSync()` is synchronous and blocks execution until finished.
 - `readFile()` is asynchronous and returns immediately while things function in the background.
 - 
 ## 2. Avoid Sessions and Cookies in APIs, and Send Only Data in the API Response.
 - You use cookies and sessions to store temporary states in the server. They cost a lot for servers.

 - Now, stateless APIs are common and provide JWT, OAuth, and other authentication mechanisms. These authentication tokens are kept on the client side and protect the servers to manage the state.

 - JWT is a JSON-based security token for API Authentication. JWTs can be seen but they're not modifiable once they're sent. JWT is just serialized, not encrypted. OAuth is not an API or a service – rather, it's an open standard for authorization. OAuth is a standard set of steps for obtaining a token.

 - Also, don’t waste your time in making your Node.js server serve static files. Use NGINX and Apache instead, as they work far better than Node for this purpose.

 - While building APIs in Node, don’t send the full HTML page in the response of the API. Node servers work better when only data is sent by the API. Generally, this kind of application works with JSON data.
 
## 3. Optimize Database Queries
 - Query optimization is an essential part of building optimized APIs in Node. Especially in larger applications, you'll need to query databases many times. So, a bad query can reduce the overall performance of the application.

 - Indexing is an approach to optimize the performance of a database by minimizing the number of disk accesses required when a query is processed. It is a data structure technique that is used to quickly locate and access the data in a database. Indexes are created using a few database columns.

 - Let's say we have a DB schema without indexing and the database contains 1 million records. A simple find query will go through a larger number of records to find the matching one compared to the schema with indexing.

 - Query without indexing:
 ```
> db.user.find({email: 'ofan@skyshi.com'}).explain("executionStats")
```
 - Query with indexing:
 ```
> db.getCollection("user").createIndex({ "email": 1 }, { "name": "email_1", "unique": true })
{
 "createdCollectionAutomatically" : false,
 "numIndexesBefore" : 1,
 "numIndexesAfter" : 2,
 "ok" : 1
}
```


## 4. Use Error Scripts with Logging
 - The best way to monitor the proper functioning of your APIs is to keep track of their activity. This is where logging the data comes into play.

 - A common example of logging is printing out the logs to the console (using console.log()).

 - More efficient logging modules as compared to console.log are Morgan, Buyan, and Winston. Here, I’ll go with the example of Winston.

### How to log with Winston – features
 - Provides 4 custom levels that we can use such as info, error, verbose, debug, silly, and warn.
 - Supports querying the logs
 - Simple profiling
 - You can use multiple transports of the same type
 - Catches and logs uncaughtException
 - You can set up Winston with the following command:
```
npm install winston --save
```

And here's a basic configuration of Winston for logging:
```
const winston = require('winston');

let logger = new winston.Logger({
  transports: [
    new winston.transports.File({
      level: 'verbose',
      timestamp: new Date(),
      filename: 'filelog-verbose.log',
      json: false,
    }),
    new winston.transports.File({
      level: 'error',
      timestamp: new Date(),
      filename: 'filelog-error.log',
      json: false,
    })
  ]
});

logger.stream = {
  write: function(message, encoding) {
    logger.info(message);
  }
};
```

## 5. Use HTTP/2 Instead of HTTP
 - In addition to these techniques, we can also apply some other techniques like using HTTP/2 over HTTP, as it has the following advantages:

 - Multiplexing
 - Header compression
 - Server push
 - Binary format
 - It focuses on the performance and issues that the previous version of HTTP has. It makes web browsing faster and easier and consumes less bandwidth.
 
## 6. Run Tasks in Parallel
 - Use async.js to help you run tasks. Parallelizing tasks has a great impact on the performance of your API. It reduces latency and minimizes blocking operations.

 - Parallel means running multiple things at the same time. However, when you run things in parallel, you don’t need to control the execution sequence of the program.

 - Here's a simple example using async parallel with an array:
```
const async = require("async");
// an example using an object instead of an array
async.parallel({
  task1: function(callback) {
    setTimeout(function() {
      console.log('Task One');
      callback(null, 1);
    }, 200);
  },
  task2: function(callback) {
    setTimeout(function() {
      console.log('Task Two');
      callback(null, 2);
    }, 100);
    }
}, function(err, results) {
  console.log(results);
  // results now equals to: {task2: 2, task1: 1}
});
```

In this example, we used async.js to execute the two tasks in asynchronous mode. Task 1 requires 200 ms to complete, but task 2 does not wait for its completion – it executes at its specified delay of 100ms.

Parallelizing tasks has a great impact on the performance of API. It reduces latency and minimizes blocking operations.


## 7. Use Redis to Cache the App
 - Redis is the advanced version of Memcached. It optimizes the APIs response time by storing and retrieving the data from the main memory of the server. It increases the performance of the database queries which also reduces access latency.

 - In the following code snippets, we have called the APIs without and with Redis, respectively, and compared the response time.

 - There is a huge difference in the response time ~ 899.37ms:

METHOD	RESPONSE TIME
Without Redis	900ms
With Redis	0.621ms

### Here's Node without Redis:

```
'use strict';

//Define all dependencies needed
const express = require('express');
const responseTime = require('response-time')
const axios = require('axios');

//Load Express Framework
var app = express();

//Create a middleware that adds a X-Response-Time header to responses.
app.use(responseTime());

const getBook = (req, res) => {
  let isbn = req.query.isbn;
  let url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`;
  axios.get(url)
    .then(response => {
      let book = response.data.items
      res.send(book);
    })
    .catch(err => {
      res.send('The book you are looking for is not found !!!');
    });
};

app.get('/book', getBook);

app.listen(3000, function() {
  console.log('Your node is running on port 3000 !!!')
});
```
### And here's Node with Redis:

```
'use strict';

//Define all dependencies needed
const express = require('express');
const responseTime = require('response-time')
const axios = require('axios');
const redis = require('redis');
const client = redis.createClient();

//Load Express Framework
var app = express();

//Create a middleware that adds a X-Response-Time header to responses.
app.use(responseTime());

const getBook = (req, res) => {
  let isbn = req.query.isbn;
  let url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`;
  return axios.get(url)
    .then(response => {
      let book = response.data.items;
      // Set the string-key:isbn in our cache. With the contents of the cache : title
      // Set cache expiration to 1 hour (60 minutes)
      client.setex(isbn, 3600, JSON.stringify(book));

      res.send(book);
    })
    .catch(err => {
      res.send('The book you are looking for is not found !!!');
    });
};

const getCache = (req, res) => {
  let isbn = req.query.isbn;
  //Check the cache data from the server redis
  client.get(isbn, (err, result) => {
    if (result) {
      res.send(result);
    } else {
      getBook(req, res);
    }
  });
}
app.get('/book', getCache);

app.listen(3000, function() {
  console.log('Your node is running on port 3000 !!!')
)};


```