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
Auth Routes<br>
POST /api/auth/register - Register a new user<br>
POST /api/auth/login - Login and receive JWT<br>

Event Routes<br>
GET /api/events - Get all events (supports ?category= and ?date=)<br>
GET /api/events/:id - Get event details by ID<br>
POST /api/events - Create a new event (Admin Only)<br>
PUT /api/events/:id - Update event details (Admin Only)<br>
DELETE /api/events/:id - Delete an event (Admin Only)<br>

Booking Routes<br>
POST /api/bookings - Book tickets for an event (User Only)<br>
GET /api/bookings - Get all bookings for the logged-in user<br>
GET /api/bookings/:id - Get specific booking details (Owner Only)<br>

## Testing with Postman
Use the /api/auth/register endpoint to create an account.<br>
Use the /api/auth/login endpoint to get your token.<br>
When making an admin account be sure to use the user role in the json.<br>
In Postman, go to the Authorization tab, select Bearer Token, and paste your token to access protected routes.<br>
Test the rest of the routes normally with http://localhost:5000 behind each route using the bearer token whenever only certain people can access a route (example: http://localhost:5000/api/auth/login)

## Example JSON for pages
Register page
```bash
{
  "name": "Admin User",
  "email": "admin@test.com",
  "password": "password123",
  "role": "admin" 
}
```

Login page
```bash
{
  "email": "admin@test.com",
  "password": "password123"
}
```

Creating an event
```bash
{
  "title": "Tech Conference 2026",
  "description": "The future of AI.",
  "category": "Technology",
  "venue": "San Francisco",
  "date": "2026-08-15",
  "time": "10:00 AM",
  "seatCapacity": 100,
  "price": 50
}
```

Creating a booking
```bash
{
  "eventId": "6a0436cf2a24bc75aaa7b862",
  "quantity": 2
}
```

Updating an event
```bash
{
  "price": 100
}
```