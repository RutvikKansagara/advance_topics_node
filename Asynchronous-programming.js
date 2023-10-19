const fs = require("fs");

//synchronous programming

const data = fs.readFileSync("read.txt","utf-8");

console.log(data);


console.log("after reading data...");

//asynchronous programming

const async_data = fs.readFile("read.txt","utf-8",((error,result)=>{
    console.log(result);
}));


console.log("after reading async data");


function fetchDataWithCallback(callback) {
    setTimeout(() => {
      console.log("Fetching data with Callback...");
      let data = "Async data received!";
      callback(data);
    }, 2000);
  }
  
  // Using a callback
  fetchDataWithCallback((result) => {
    console.log(result);
  });
  
  // Promises
  
  function fetchDataWithPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Fetching data with Promise...");
        let success = true;
        if (success) {
          let data = "Async data received!";
          resolve(data);
        } else {
          reject("Error fetching data!");
        }
      }, 2000);
    });
  }
  
  // Using a promise with .then() and .catch()
  fetchDataWithPromise()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });
  
  // Async/Await
  
  async function fetchDataWithAsyncAwait() {
    try {
      console.log("Fetching data with Async/Await...");
      let data = await fetchDataWithPromise();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  
  // Using async/await
  fetchDataWithAsyncAwait();
  
  //Concurrent Promises with Promise.all
  
  const fetchData1 = () => new Promise(resolve => setTimeout(() => resolve("Data 1"), 1500));
  const fetchData2 = () => new Promise(resolve => setTimeout(() => resolve("Data 2"), 1000));
  
  Promise.all([fetchData1(), fetchData2()])
    .then(results => {
      console.log("Concurrent Promises:", results);
    })
    .catch(error => {
      console.error(error);
    });
  