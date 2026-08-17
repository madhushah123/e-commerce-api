// const express = require("express");
import express from 'express';                          // Import the Express framework for building the server
import connectDB from './config/database.js';            // Import the function to connect to the database
import HANDLERS from './handlers/index.js';             // Import the route handlers for handling different endpoints and controllers
import errorMiddleware from './middlewares/error.js';   // Import the custom error handling middleware to handle errors and send appropriate responses
import { authMiddleware } from './middlewares/auth.js'; // Import the authentication middleware to protect routes and handle authentication
import "@dotenvx/dotenvx/config";

const app = express();      // Create an instance of the Express application

const PORT = process.env.PORT;     // Use environment variable for port, default to 3000 if not set

connectDB();                     // Connect to the database before starting the server

app.use(express.json());       // Middleware to parse JSON request bodies
app.use(authMiddleware);       // Middleware for handling authentication and protecting routes
app.use("/", HANDLERS);       //middleware for handling routes, endpoints, and controllers
app.use(errorMiddleware);     // Middleware for handling errors and sending appropriate responses

app.listen(PORT, () => {     // Start the server and listen on the specified port    
    console.log(`Server is running on port ${PORT}`);       // Log a message to the console when the server is successfully running
});
