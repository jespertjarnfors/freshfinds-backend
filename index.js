require("dotenv").config();

const express = require("express");
const cors = require('cors');
const dbConnect = require("./dbConnect");

const app = express();

// Configuring CORS to allow requests from frontend
const corsOptions = {
  origin: ['http://localhost:5173'],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
};

app.use(cors(corsOptions));

// Middleware to parse JSON
app.use(express.json());

// Import Routes
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

// Use Routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/reviews', reviewRoutes);

// Root Route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MongoDB application." });
});

// Test route for CORS
app.options('*', cors(corsOptions));
app.get('/test-cors', (req, res) => {
  res.send('CORS is configured correctly.');
});

// Start Server
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// Graceful Shutdown
process.on('SIGINT', () => {
  dbConnect.Mongoose.connection.close(() => {
    console.log('MongoDB connection closed due to application termination');
    process.exit(0);
  });
});

// Test endpoint without CORS restrictions
app.get('/test', (req, res) => {
  res.send('This endpoint is accessible without CORS restrictions.');
});
