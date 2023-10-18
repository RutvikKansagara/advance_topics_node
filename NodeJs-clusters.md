# Node Js Clusters 

 - Node.js, by default, follows the single threaded event loop based architecture. Even if the computer has more than one CPU core, Node.js does not use all of them by default. It only uses one CPU core for the main thread that handles the event loop. So, for example, if you have a four-core system, Node will only use one of them by default.

 - Suppose two requests come at the same time; in that case, the event loop will be able to take on only one of them, and the other one will go to the queue. Hence to handle a large number of users at the same time one core isn’t sufficient. To handle such a heavy load, we need to launch a cluster of such Node.js processes and hence make use of multiple cores.

 - Node.js comes bundled up with a cluster module. The cluster module permits the creation of child processes, that are copies of your program operating concurrently on the same server port. Each child process possesses an event loop, V8 instance and memory. There is a parent process routing traffic to these child processes. To communicate with the parent processes, the child processes employ interprocess communication.

 - Hence while using the cluster module, you will have four copies of your program in case of a 4-core machine. This will allow you to handle four times the normal traffic at the same speed. Therefore clustering is capable of giving a performance boost to your Node.js application.
 

## The Need of Clustering

 - Node.js has single threaded event loop architecture. This means that there is one single thread that receives all the requests. This does not mean that your Node.js application cannot make use of multiple cores. To make use of multiple cores, a cluster of processes is started to handle the load. The cluster module is required to set up a cluster and make use of the numerous processors.

 - Scalability is needed when an application’s clients grow. The application must be updated so as to support a large number of users and provide a good experience to all of them. Clustering acts as a load-balancing and parallel processing service.

 - The performance of the application gets a major boost when the load is shared among the multiple cores of the application. Most systems these days feature multiple cores. Hence the cluster module must be used to get the best performance from the application.
 

## How does the Node.js cluster module work?

 - Node.js cluster module can be said to provide the load balancing server. The load of the application is distributed by the parent process to the child processes that are running on a shared port. Suppose a large synchronous operation is being handled. The event loop takes up the synchronous part of all the processes. This will make the other requests go to the queue. This will take a lot of time to process those requests. Hence the multiple processes can reduce the wait time and improve the performance.

 - When multiple processes are running, then there are other processes that can work on the incoming requests if one process is engaged in a heavy CPU-intensive process. This will also ensure the utilization of multiple cores. Thus, the cluster module enables load sharing among the child processes and prevents the application from stopping.

 - There is a parent or a master process available that manages the load to the child processes. The master process listens to a process. There are two ways in which the traffic is routed. One is based on the round-robin technique. In this, the load is equally shared among the child processes. The second method involves the sending of work to the interested child processes.
 
## Advantages of using clustering in Node.js

 There are a number of different advantages in using clusters in Node.js :

 - Because the Node.js programme may use all of the CPU resources available (most PCs nowadays have a multi-core CPU), the processing burden will be distributed to these cores. As load balancing is done and all CPU cores are fully utilised. Multiple single threaded processes will be created, and this will improve the throughput of the system (measured in requests per second).
 
 - As there are many processes ready to receive incoming requests, allowing multiple requests to be processed concurrently. Even if there are blocking or lengthy jobs, only one worker is impacted, and other workers can continue to handle other requests. Until the blocking process is completed, your Node.js application will not stop responding as it would have previously.
 - Having a number of worker processes allows the software to be updated with little or no downtime. They may be recycled/restarted one at a time because there are many workers. This implies that one child process can smoothly replace another, and there will never be a moment when all the workers are inactive. As you can see, this quickly enhances an update's speed and efficiency.
 - If a launched process dies unexpectedly or on purpose, a new process can be started immediately as a replacement for the process that died with no need of manual interruption or any delay.
 - The use of numerous cores for execution improves application performance of the application.
 - The wastage of hardware resource is drastically reduced by the utilization of the full potential of the processor.
 - There is no need to create an extra dependency because all work is managed by the NodeJs module.
 
## Cluster Properties and Methods
```
Method	                               Description
fork()	           Creates a new worker, from a master
settings	       Returns an object containing the cluster's settings
disconnect()	   Disconnects all workers
exitedAfterDisconnect	Returns true if a worker was exited after disconnect, or the kill method
isMaster	         Returns true if the current process is master, otherwise false
id                	A unique id for a worker
kill()	            Kills the current worker
isConnected	        Returns true if the worker is connected to its master, otherwise false
worker	            Returns the current worker object
isWorker 	        Returns true if the current process is worker, otherwise false
workers	            Returns all workers of a master
isDead	            Returns true if the worker's process is dead, otherwise false
process	            Returns the global Child Process
schedulingPolicy    Sets or gets the schedulingPolicy
send()	            sends a message to a master or a worker
setupMaster()	    Changes the settings of a cluster
 
```

