const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

// Enable CORS for all routes
app.use(cors());

async function connectToDatabase() {
    try {
        await mongoose.connect('mongodb+srv://adam:EPQfpcJi2hwnsCoW@cluster0.ujd6hhy.mongodb.net/lb4all');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
}

// Call the function to connect to the database
connectToDatabase();

// Middleware to log IP address
const logIpAddress = (req, res, next) => {
    const ip = req.ip || req.connection.remoteAddress;
    console.log(`Request from IP: ${ip}`);
    next();
};

// Apply middleware to log IP address for all routes
app.use(logIpAddress);

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const roleRoutes = require('./routes/roleRoutes');
const brandRoutes = require('./routes/brandRoutes');

app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/categories', categoryRoutes);
app.use('/roles', roleRoutes);
app.use('/brands', brandRoutes);

const server = app.listen(PORT, () => {
    const address = server.address();
    console.log(`Server is running on http://localhost:${address.port}`);
});
