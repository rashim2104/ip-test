# README.md

# IP Address Server

This project is a simple Node.js server that accepts a GET API request and returns the user's IP address.

## Project Structure

```
ip-address-server
├── src
│   ├── server.js         # Entry point of the application
│   ├── routes
│   │   └── ip.js         # Defines the GET API route
│   └── controllers
│       └── ipController.js # Handles the logic for the GET request
├── package.json           # Configuration file for npm
└── README.md              # Documentation for the project
```

## Getting Started

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd ip-address-server
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the Server

To start the server, run the following command:
```
node src/server.js
```

The server will start and listen for incoming requests.

### API Endpoint

- **GET /ip**: Returns the user's IP address.

### Example Request

You can test the API using a tool like Postman or curl:
```
curl http://localhost:3000/ip
```

### License

This project is licensed under the MIT License.#   i p - t e s t 
 
 
