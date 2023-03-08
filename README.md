
# CRUD-example

Demonstrates how to create a JavaScript CRUD.



## Tech Stack

Client: JavaScript, HTML, CSS

Server: Express, Cors, Axios
## Features

- type first and last name
- edit the inputted name
- delete the inputted name
## Run Locally

Clone the project

```bash
  git clone https://github.com/TrinityBalderas/Js-CRUD-example.git
```

Go to the project directory

```bash
  cd Js-CRUD-example/server
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  cd server
  nodemon main.js
```


## API Reference

#### Get all names

```http
  GET /api/name
```

#### Get name

```http
  GET /api/name/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `long`   | **Required**. Id of name to fetch |

#### Create task

```http
  POST /api/name
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `body`    | `Task`   | **Required**. Name data to create |

#### Replace task

```http
  PUT /api/name/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `long`   | **Required**. Id of name to fetch |
| `body`    | `Task`   | **Required**. Name data to replace|


#### Updated task

```http
  PATCH /api/name/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `long`   | **Required**. Id of name to fetch |
| `body`    | `Task`   | **Required**. Name data to replace|

#### Delete task

```http
  DELETE /api/name/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `long`   | **Required**. Id of name to delete|

## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

