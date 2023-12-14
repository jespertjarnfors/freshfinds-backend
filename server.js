require("dotenv").config();
const express = require("express");
const app = express();
let dbConnect = require("./dbConnect");

// Routes

app.use(express.json());

let userRoutes = require('./routes/userRoutes')
app.use('/api/users', userRoutes)

let productRoutes = require('./routes/productRoutes')
app.use('/api/products', productRoutes);

let orderRoutes = require('./routes/orderRoutes');
app.use('/api/orders', orderRoutes);

let reviewRoutes = require('./routes/reviewRoutes');
app.use('/api/reviews', reviewRoutes);


// parse requests of content-type -application/json
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MongoDB application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on
port ${PORT}.`);
});
