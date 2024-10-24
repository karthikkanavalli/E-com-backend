# Backend for E-commerce Application

## Overview

This repository contains the backend code for an e-commerce application designed to facilitate seamless online shopping experiences. Built using the MERN stack (MongoDB, Express, React, Node.js), the backend provides essential features such as user authentication, product management, cart functionality, and order processing.

## Technologies Used

- **Node.js**: JavaScript runtime used for building scalable network applications.
- **Express.js**: Web application framework for Node.js, designed for building APIs and web applications.
- **MongoDB**: NoSQL database used for storing user data, product details, and orders.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js, providing a schema-based solution to model application data.
- **JWT (JSON Web Tokens)**: Used for secure user authentication and authorization.
- **Axios**: Promise-based HTTP client for making API requests from the frontend.
- **dotenv**: Module to load environment variables from a `.env` file into `process.env`.
- **Bcrypt.js**: Library for hashing passwords securely.
- **Nodemailer**: Module to send emails (optional, if implemented for notifications).

## Features

- **User Authentication**: 
  - Register users with hashed passwords.
  - Log in users using JWT for secure session management.

- **Product Management**:
  - Add, update, and delete products from the database.
  - Retrieve product details for display on the frontend.

- **Cart Functionality**:
  - Users can add products to their cart.
  - Update and remove items from the cart.
  - Store cart state in the database.

- **Order Management**:
  - Users can place orders for products.
  - Orders are tracked with statuses (e.g., Pending, Completed).
  - Admin functionality to update order statuses.

- **RESTful API**: 
  - Well-structured API endpoints for all functionalities, following REST principles.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ecommerce-backend.git
   cd ecommerce-backend
