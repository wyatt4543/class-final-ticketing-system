# Event Ticketing System API

This is a RESTful API for an Event Ticketing System. It allows users to browse events and book tickets while providing administrators with tools to manage event listings. The system ensures data integrity by preventing overbooking and uses JWT (JSON Web Tokens) to secure user data and restrict administrative actions to authorized accounts.

## Installation & Setup

1. **clone the repository**
    ```bash
    git clone https://github.com/wyatt4543/class-final-ticketing-system

2. **install dependencies**
    ```bash
    npm install

3. **configure environment variables**<br>
    Create a .env file in the root directory and add your credentials:
    ```bash
    PORT=5000
    MONGO_URI=mongodb+srv://<username>:<db_password>@<clustername_no_capital_letters>.mongodb.net/?appName=<clustername_with_capital_letters>
    JWT_SECRET=your_random_secret_key_here
    ```

4. **run the application**
    ```bash
    node server.js

## Deployed API Link
https://class-final-ticketing-system.onrender.com/

## API Endpoints
Method	Endpoint	Description<br>
Auth Routes
POST /api/auth/register - Register a new user
POST /api/auth/login - Login and receive JWT

Event Routes
GET /api/events - Get all events (supports ?category= and ?date=)
GET /api/events/:id - Get event details by ID
POST /api/events - Create a new event (Admin Only)
PUT /api/events/:id - Update event details (Admin Only)
DELETE /api/events/:id - Delete an event (Admin Only)

Booking Routes
POST /api/bookings - Book tickets for an event (User Only)
GET /api/bookings - Get all bookings for the logged-in user
GET /api/bookings/:id - Get specific booking details (Owner Only)

## Testing with Postman
Use the /api/auth/register endpoint to create an account.
Use the /api/auth/login endpoint to get your token.
In Postman, go to the Authorization tab, select Bearer Token, and paste your token to access protected routes.
Test the rest of the routes normally with http://localhost:5000 behind each route using the bearer token whenever only certain people can access a route (example: http://localhost:5000/api/auth/login)