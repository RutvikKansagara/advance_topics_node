const express = require("express");
const PORT = 3001;
const cluster = require("cluster");
const totalCPUs = require("os").cpus().length;
 
if (cluster.isMaster) {
    console.log(`Number of CPUs is ${totalCPUs}`);
    console.log(`Master ${process.pid} is running`);
    
    // Fork workers.
    for (let i = 0; i < totalCPUs; i++) {
        cluster.fork();
    }

    cluster.on("exit", (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
        console.log("Let's fork another worker!");
        cluster.fork();
    });
} else {
    start();
}
 
function start() {
    const app = express();
    console.log(`Worker with id ${process.pid} started`);
 
    app.get("/", (req, res) => {
        res.send("Welcome to the API with the use of clustering");
    });
 
    app.get("/cluster", function (req, res) {
        console.time("API-with-cluster");
        const base = 9;
        const POW = 7;

        let result = 0;

        // Iterate 9^7 times.
        for (let i = Math.pow(base, POW); i >= 0; i--) {
          // Perform a complex operation.
            result += i + Math.pow(i, 10);
        }
        console.timeEnd("API-with-cluster");

        console.log(`Result is ${result} - from PROCESS ${process.pid}`);
        res.send(`Result number is ${result}`);
    });
 
    app.listen(PORT, () => {
        console.log(`App listening on PORT : ${PORT}`);
    });
}
