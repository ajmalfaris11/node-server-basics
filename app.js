// Import the built-in HTTP module from Node.js
const http = require("http");

// Create an HTTP server
const server = http.createServer(async (req, res) => {
  // Check if the request is for the root URL ("/") and is a GET request
  if (req.url === "/" && req.method === "GET") {
    // Respond with a message if the root URL is accessed
    res.write("Hello. I am here!");
    res.end(); // End the response
  }



  // Check if the request is for the "/add" URL and is a GET request
  else if (req.url === "/add" && req.method === "GET") {
    // Respond with a message if the "/add" URL is accessed
    res.write("Hello. I am add page!");
    res.end(); // End the response
  }
  
  
  else {
    // Respond with a message if the requested route is not defined
    res.end("no route present ");
  }
});




// Start the server and have it listen on port 3200
server.listen(3200, () => {
  // Log a message to the console confirming the server is running
  console.log("Server running at port 3200");
});
