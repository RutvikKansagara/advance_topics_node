//using try-catch code example

function dosomething() {
	throw new Error(
		'a error is thrown from dosomething');
}

function init() {
	try {
		dosomething();
	}
	catch (e) {
		console.log(e);
	}
	console.log(
		"After successful error handling");
}

init();


//using callbacks code example

const fs = require("fs");

fs.readFile('demo.txt', function (err, data) {
	if (err) {
		console.error(err);
	}
	else {
		console.log(data.toString());
	}
});

console.log("Program Ended");


//using promise and promise callback code example


const Promise = require('promise');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost/TestDB';
MongoClient.connect(url)
	.then(function (err, db) {
		db.collection('Test').updateOne({
			"Name": "Joe"
		},
			{
				$set: {
					"Name": "Beck"
				}
			});
	})
	.catch(error => console.log(error))


//using async await



async function f() {
    try {
      let response = await fetch('http://xyzurl');
      // Process the response if needed
      console.log('Response:', response);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Call the async function
  f();
  
