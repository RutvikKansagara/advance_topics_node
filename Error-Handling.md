# Error Handling in Node js


Node.js is a JavaScript extension used for server-side scripting. Error handling is a mandatory step in application development. Handling errors in asynchronous functions is important because their behavior may vary, unlike synchronous functions. While try-catch blocks are effective for synchronous functions, asynchronous functions can be dealt with callbacks, promises, and async-await. Try-catch is synchronous means that if an asynchronous function throws an error in a synchronous try/catch block, no error throws. Errors thrown in Node.js applications can be handled in the following ways:

 - Using try-catch block
 - Using callbacks
 - Using promises and promise callbacks
 - Using async-await


### Using try-catch block:
                          The try-catch block can be used to handle errors thrown by a block of code. 


code:


```
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
```

output:

```
Error: a error is thrown from dosomething
    at dosomething (F:\encircle\Assignment-8\error-handling.js:4:8)
    at init (F:\encircle\Assignment-8\error-handling.js:10:3)
    at Object.<anonymous> (F:\encircle\Assignment-8\error-handling.js:19:1)
    at Module._compile (node:internal/modules/cjs/loader:1254:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
    at Module.load (node:internal/modules/cjs/loader:1117:32)
    at Module._load (node:internal/modules/cjs/loader:958:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47
After successful error handling

```

  - The init() function is called which in turn calls dosomething() function which throws an error object. This error   object is caught by the catch block of the init() method. If there is no proper handling of the error the program will terminate. The catch block prints the call stack to show the point where the error occurred. 


## Using callbacks: 

A callback is a function called at the completion of a certain task. Callbacks are widely used in Node.js as it prevents any blocking and allows other code to be run in the meantime. The program does not wait for the file reading to complete and proceeds to print “Program Ended” while continuing to read the file. If any error occurs like the file does not exist in the system then the error is printed after “Program Ended”, else the content of the file is outputted. 


code:

```
const fs = require("fs");

fs.readFile('foo.txt', function (err, data) {
	if (err) {
		console.error(err);
	}
	else {
		console.log(data.toString());
	}
});

console.log("Program Ended");

```

output:

```

Program Ended
[Error: ENOENT: no such file or directory, open 'F:\encircle\Assignment-8\demo.txt'] {
  errno: -4058,
  code: 'ENOENT',
  syscall: 'open',
  path: 'F:\\encircle\\Assignment-8\\demo.txt'
}

```

 - In this case, the file does not exist in the system hence the error is thrown.



 ## Using promises and promise callbacks:
 
  Promises are an enhancement to Node.js callbacks. When defining the callback, the value which is returned is called a “promise”. The key difference between a promise and a callback is the return value. There is no concept of a return value in callbacks. The return value provides more control for defining the callback function. In order to use promises, the promise module must be installed and imported into the application. The .then clause handles the output of the promise. If an error occurs in any .then clause or if any of the promises above are rejects, it is passed to the immediate .catch clause. In case of a promise is rejected, and there is no error handler then the program terminates.


```

code:

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


```

output:


```

MongoServerSelectionError: connect ECONNREFUSED ::1:27017
    at Timeout._onTimeout (F:\encircle\Assignment-8\node_modules\mongodb\lib\sdam\topology.js:278:38)
    at listOnTimeout (node:internal/timers:569:17)
    at process.processTimers (node:internal/timers:512:7) {
  reason: TopologyDescription {
    type: 'Unknown',
    servers: Map(1) { 'localhost:27017' => [ServerDescription] },
    stale: false,
    compatible: true,
    heartbeatFrequencyMS: 10000,
    localThresholdMS: 15,
    setName: null,
    maxElectionId: null,
    maxSetVersion: null,
    commonWireVersion: 0,
    logicalSessionTimeoutMinutes: null
  },
  code: undefined,
  [Symbol(errorLabels)]: Set(0) {},
  [cause]: MongoNetworkError: connect ECONNREFUSED ::1:27017
      at connectionFailureError (F:\encircle\Assignment-8\node_modules\mongodb\lib\cmap\connect.js:379:20)
      at Socket.<anonymous> (F:\encircle\Assignment-8\node_modules\mongodb\lib\cmap\connect.js:285:22)
      at Object.onceWrapper (node:events:628:26)
      at Socket.emit (node:events:513:28)
      at emitErrorNT (node:internal/streams/destroy:151:8)
      at emitErrorCloseNT (node:internal/streams/destroy:116:3)
      at process.processTicksAndRejections (node:internal/process/task_queues:82:21) {
    [Symbol(errorLabels)]: Set(1) { 'ResetPool' },
    [cause]: Error: connect ECONNREFUSED ::1:27017
        at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1494:16) {
      errno: -4078,
      code: 'ECONNREFUSED',
      syscall: 'connect',
      address: '::1',
      port: 27017
    }
  }
}


```

## Using async-await:

 Async-await is a special syntax to work with promises in a simpler way that is easy to understand. When we use async/await, .then is replaced by await which handles the waiting in the function. The error handling is done by the .catch clause. Async-await can also be wrapped in a try-catch block for error handling. In case no error handler exists the program terminates due to an uncaught error. 


 code:

 ```

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

  ```

  output:


  ```

  Error: TypeError: fetch failed
    at Object.fetch (node:internal/deps/undici/undici:11404:11)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async f (F:\encircle\Assignment-8\error-handling.js:64:22) {
  cause: Error: getaddrinfo ENOTFOUND xyzurl
      at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:107:26) {
    errno: -3008,
    code: 'ENOTFOUND',
    syscall: 'getaddrinfo',
    hostname: 'xyzurl'
  }
}


```

