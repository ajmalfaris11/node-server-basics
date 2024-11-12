# Node Server Basics

This project is a simple HTTP server built with Node.js using only core modules, without any external libraries except for **Nodemon** (installed for development convenience). The server responds to specific routes with custom messages and demonstrates fundamental server creation and route handling in Node.js.

## Features

- **Root Route ("/")**: Returns a welcome message when accessed via a GET request.
- **Add Route ("/add")**: Returns a message indicating the add page for a GET request.
- **Admin Route ("/admin")**: Returns a message indicating the admin page for a GET request.

## Getting Started

### Prerequisites

Ensure that you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
    ```bash
    git clone (https://github.com/ajmalfaris11/node-server-basics.git)
    ```
2. Navigate to the project directory:
    ```bash
    cd <project-directory>
    ```
3. Initialize the project with npm and install **Nodemon**:
    ```bash
    npm init -y
    npm install nodemon --save-dev
    ```

### Usage

To start the server with **Nodemon** for auto-restarts:

```bash
npx nodemon <your-main-server-file>.js
```

Alternatively, you can start the server with:

```bash
node <your-main-server-file>.js
```

The server will be accessible at `http://localhost:3200`.

### Server Routes

| Route       | Method | Description                     |
|-------------|--------|---------------------------------|
| `/`         | GET    | Returns a welcome message       |
| `/add`      | GET    | Returns the add page message    |
| `/admin`    | GET    | Returns the admin page message  |

## Project Summary

This project showcases the following:
- Basic HTTP server creation using Node.js.
- Handling specific routes and responding with custom messages.
- **Nodemon** setup for development ease, allowing for automatic restarts upon file changes.

