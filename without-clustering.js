const express = require("express");
const PORT = 3000;

const app = express();
// Log the process id of the current process.
console.log(`Worker with id ${process.pid} started`);
 
// GET endpoint for '/' path
app.get("/", (req, res) => {
    res.send("Welcome to the API without the use of clustering");
});
 
// GET endpoint for '/nocluster' path.
app.get("/nocluster", function (req, res) {
    // Log the time at the start of function execution.
    console.time("API-without-cluster");

    const base = 9;
    const POW = 7;

    let result = 0;

    // Iterate 9^7 times.
    for (let i = Math.pow(base, POW); i >= 0; i--) {
        // Perform a complex operation.
        result += i + Math.pow(i, 10);
    }
 
    // Log the time at the completion of complex operation's execution.
    console.timeEnd("API-without-cluster");

    console.log(`RESULT IS ${result} - from PROCESS ${process.pid}`);

    // Return the result as response.
    res.send(`Result number is ${result}`);
});
 
// Make the application listen on the specified port.
app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
});
