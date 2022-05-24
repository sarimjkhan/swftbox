## Prerequisites

```
docker
docker-compose
```

## Pull the project on Local

```
- git clone https://github.com/sarimjkhan/swftbox.git
```

## Running the project locally using docker

```
Create Server/Client Image
- docker build -t assignment/swftbox .

Run  Server(port: 5001)/Client(port: 3000) Image
- docker run -it -p 3000:3000 -p 5001:5001 assignment/swftbox

open in browser http://localhost:3000
```

## Running the project locally using docker-compose

```
- docker-compose up

To create the image only, run the following command
- docker-compose --build

open in browser http://localhost:3000
```

## Running the project directly from the docker hub public image

```
Run  Server(port: 5001)/Client(port: 3000) Image
- docker run -p 3000:3000 -p 5001:5001 -t sarimjkhan/swftbox

open in browser http://localhost:3000
```

## Running the APIS

```
Access the following url
https://localhost:5001/urls

You will have the list of general APIs to access.
For other ENDPOINTS, please see the section for documentation and collection at the end.
```

## CI/CD (GitHub Actions and Heroku)

```
Deployed to HEROKU through GitHub Actions

To see CI/CD in action, do a small change in readme.md and push the code to the following repository main branch.
https://github.com/sarimjkhan/swftbox.git

Backend deployed on https://swftbox.herokuapp.com (Still under progress for frontend)
```

## API Documentation

```
https://documenter.getpostman.com/view/3727741/UyxqBNNC
```

**NOTE:** Postman collection is also provided in the `documentation` and is also available in the project's root folder.
