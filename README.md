# FreshFinds Backend

A full-stack web application designed to connect local produce buyers with nearby producers. Built with React, Node.js, Express, MongoDB, TailwindCSS, and Google Maps API, the app features user authentication, product listings, a shopping cart, order management, and an interactive map for locating producers.

Project Documentation and Capstone presentation: https://drive.google.com/drive/folders/19R6ggXmppgaeYH__Ir1dsrBfQd30mdjj?usp=sharing

## Key Features

User authentication and authorization through AWS Cognito.
Dynamic product listings displaying products near the user's location, and options to add to cart.
Order confirmation and management system.
Interactive map displaying producer locations through Google Maps API.
Review and rating system for orders and producers.

## Installation

Link to frontend: https://github.com/jespertjarnfors/freshfinds-frontend

bash, Copy code or git clone https://github.com/jespertjarnfors/freshfinds-backend.git
- `cd backend`
- `npm install` both frontend and backend
- `npm run dev` for frontend
- `npm start` for backend

To run the backend and frontend in its current state, you will need:
- Google Maps API Key
- AWS Cognito User Pool
- MongoDB Database

For the Backend, ensure to create your .env file with your own personal configuration for the following parameters:
PORT=3000
DB_URI={yourMongoDBUri}
GOOGLE_MAPS_API_KEY={yourGoogleMapsAPIKey}
AWS_ACCESS_KEY_ID={yourAWSAccessKeyId}
AWS_SECRET_ACCESS_KEY={yourAWSSecretAccessKey}
USER_POOL_ID={yourUserPoolId}

## Usage

After logging in, users can browse available produce, add items to their cart, and proceed to checkout. Orders can be reviewed and rated. The map feature allows users to explore producers in their vicinity.

### Technologies Used

React.js
Node.js with Express
MongoDB
TailwindCSS
Google Maps API
React Router

### Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

### License

"This project is licensed under the MIT License - see the LICENSE.md file for details."

**Acknowledgments**

I would like to thank Mirza Arshad and Willy Erlemann for their support with this project.
