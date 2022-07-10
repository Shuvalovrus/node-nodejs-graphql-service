# BFF apollo-graphql Musicify

## Description

We have a couple of microservices that are created for the service Musicify, a new wikipedia for Music. Service to provide a comfortable and convenient service for our users to manage and retrieve data for different entities.

## Technologies

- [GraphQL](https://graphql.org/)
- [Apollo Server](https://www.apollographql.com/docs/apollo-server)
- [TypeScript](https://www.typescriptlang.org/)

## Installation

**After clone repo checkout branch to develop**

```bash
git clone https://github.com/Shuvalovrus/node-nodejs-graphql-service.git
cd node-nodejs-graphql-service
npm install
```

## Usage

### Start Mongo-db

Start Mongo-db docker instance.

https://hub.docker.com/_/mongo

### Install and start the microservices

https://github.com/rolling-scopes-school/node-graphql-service

### Run script
```bash
npm run start 
npm run dev
```
## Testing

Goto ApolloServer Playground - http://localhost:4500/ or specify your port  

Usage Query for get operation  
Usage Mutation for modification operations

### Fist time register a user 
https://user-images.githubusercontent.com/59483799/178157362-d5460218-ea15-4745-a246-e332db7641c3.mp4

### Then get JWT token with "Query getJwt()" and set his in header like a "Bearer 'token' "
![set_token](https://user-images.githubusercontent.com/59483799/178158285-e1428179-045b-41e2-bce1-ae868c1f8445.png)

Afterwards you can send the query

