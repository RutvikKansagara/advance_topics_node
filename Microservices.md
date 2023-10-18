# What Are Microservices

  - Microservice is one such service that is responsible for software development. It helps you to identify future debugging problems and allows you to check architecture for service and performance. 

  - Microservice is a small, loosely coupled distributed service. Microservice architecture evolved as a solution to the scalability, independently deployable, and innovation challenges with Monolithic architecture (Monolithic applications are typically huge – more than 100,000 lines of code). 

  -  It allows you to take a large application and decompose or break it into easily manageable small components with narrowly defined responsibilities. It is considered the building block of modern applications. Microservices can be written in a variety of programming languages, and frameworks, and each service act as a mini-application on its own. Microservice can be considered as the subset of SOA(Service Oriented Architecture). 

  ```
  Diagram:

    +----------------------------------------+
  |             E-Commerce UI               |
  +----------------------------------------+
                     |
      +--------------|--------------+
      |              |              |
+-----v-----+ +-----v-----+ +-----v-----+
| Product   | | Order     | | User      |
| Service   | | Service   | | Service   |
+-----------+ +-----------+ +-----------+
      |              |              |
  +---v---+      +---v---+      +---v---+
  | MongoDB |    | MySQL   |    | PostgreSQL|
  +---------+    +---------+    +-----------+

```


# Reasons for Using Microservice

  - In monolithic applications, there are a few challenges:

     - For a large application, it is difficult to understand the complexity and make code changes fast and correctly,    sometimes it becomes hard to manage the code
     - Applications need extensive manual testing to ensure the impact of changes
     - An application typically shares a common relational database to support the whole application
     - For small changes, the whole application needs to be built and deployed
     - The heavy application slows down start-up time


# Benefits of Microservices


1. **Small Modules** – The application is broken into smaller modules that are easy for developers to code and maintain.

2. **Easier Process Adaption** – By using microservices, new Technology & Process Adaption becomes easier. You can try new technologies with the newer microservices that we use.

3. **Independent scaling** – Each microservice can scale independently via X-axis scaling (cloning with more CPU or memory) and Z-axis scaling (sharding), and Y-axis scaling (functional decomposition) based on their needs.

4. **Removes dependency** – Microservice eliminates long-term commitment to any single technology stack.

5. **Unaffected** – Large applications remain largely unaffected by the failure of a single module.

6. **DURS** – Each service can be independently DURS (deployed, updated, replaced, and scaled).

7. **Increased Security**: –Microservices enable data separation. Each service has its own database, making it harder for hackers to compromise your application.

8. **Open Standards**: –APIs enable developers to build their microservices using the programming language and technology they prefer.


# Examples Of Microservices

 - **Amazon** – Initially, Amazon was a monolithic application but when microservice came into existence, Amazon was the first platform to break its application into small components, thereby adapting microservice. Due to its ability to change individual features and resources, the site’s functionality improved to a massive extent. 
   
   

 - **Netflix** – Netflix is one such company that uses microservices with APIs. In 2007, when Netflix started its move towards movie-streaming service, it suffered huge service outages and challenges, then came the microservice architecture which was a blessing to the platform. 

 - **Uber** – When uber switched from monolithic nature to a microservice, it experienced a smooth way. Using microservice architecture, the webpage views and searches increased to a greater extent. 



# Characteristics Of Microservices

 - The application will be divided into micro-components
 - Each service has a separate database layer, independent codebase, and CI/CD tooling sets
 - Can also use different languages, frameworks, and technologies
 - Well-understood Distribution Transaction Management
 - Presents API and is a decentralized app
 - Easy routing process
 - Robust and failure-resistant
 - Decentralized operations
 - Stateless and stateful services
 - Designed for business
 - Each service is independent
 - Autonomous and specialized
 - Each Service can implement an independent security mechanism


 # Microservice Pros and Cons


## Pros

 - Can independently develop and deploy services
 - Dynamically scalable and quickly functioning
 - Integration with third-party dependencies
 - Has an independent manageable deployment module
 - Different services may use different languages

## Cons

 - Multiple services mean multiple resources (difficult to handle)
 - Different services using different languages makes testing difficult
 - Debugging issues
 - Increase in effort while handling it
 - Challenges in deployment
 - Communication between services isn’t easy