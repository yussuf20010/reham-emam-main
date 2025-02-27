const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const verifyToken = require('../middleware/auth');
const isStrongPassword = require('../utils/passwordStrength');
const WishList = require('../models/Wishlist');
const Order = require('../models/Order');
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const handleUpload = require('../utils/cloudinaryUpload');
const storage = new multer.memoryStorage();
const upload = multer({
    storage,
});

// Configure Cloudinary with your cloud name, API key, and API secret
cloudinary.config({
    cloud_name: 'dffov6dw1',
    api_key: '353214544668246',
    api_secret: 'YABFAE4AZkoYcGq2VN9cm4j1Lzo'
});

router.get('/search', async (req, res) => {
    try {
        const { query } = req.query;

        // Use a case-insensitive regex to search for users in all relevant fields
        const users = await User.find({
            $or: [
                { Username: { $regex: new RegExp(query, 'i') } },
                { Email: { $regex: new RegExp(query, 'i') } },
                { FirstName: { $regex: new RegExp(query, 'i') } },
                { LastName: { $regex: new RegExp(query, 'i') } },
                { Address: { $regex: new RegExp(query, 'i') } },
                { Phone: { $regex: new RegExp(query, 'i') } },
            ]
        });

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Signup
router.post('/signup', upload.single("Photo"), async (req, res) => {
    try {

        const {
            Username,
            Password,
            Email,
            FirstName,
            LastName,
            Address,
            Phone,
            UserID,
            // Add other fields as needed
        } = req.body;

        let photoUrl; // Declare a variable to store the photo URL

        if (req.file) {
            // If there's a photo, upload it to Cloudinary
            const b64 = Buffer.from(req.file.buffer).toString("base64");
            let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
            const cldRes = await handleUpload(dataURI);
            photoUrl = cldRes.secure_url; // Extract the secure URL from the Cloudinary response
        }

        // Check if a user with the same username already exists
        const existingUsername = await User.findOne({ Username });
        if (existingUsername) {
            return res.status(409).json({ message: `${Username} is already taken.` });
        }

        // Check if a user with the same email already exists
        const existingEmail = await User.findOne({ Email });
        if (existingEmail) {
            return res.status(409).json({ message: `${Email} is already registered.` });
        }

        const existingPhone = await User.findOne({ Phone });
        if (existingPhone) {
            return res.status(409).json({ message: `${Phone} is already registered.` });
        }

        // Check password strength
        if (!isStrongPassword(Password)) {
            return res.status(400).json({ message: 'Password does not meet the required strength criteria.' });
        }

        // If no duplicate and password is strong, create a new user
        const newUser = await User.create({
            Username,
            Password,
            Email,
            FirstName,
            LastName,
            Address,
            Phone,
            UserID,
            Photo: photoUrl || null, // Use the photo URL or null if no photo
            // Add other fields as needed
        });

        res.status(201).json(newUser);

    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }
});



// Login
router.post('/login', async (req, res) => {
    try {
        const { Username, Password } = req.body;
        const user = await User.findOne({ Username });

        if (!user || !(await user.comparePassword(Password))) {
            return res.status(401).json({ message: 'Invalid username or password.' });
        }

        const token = jwt.sign({ UserID: user.UserID, Username: user.Username }, 'your-secret-key', { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a specific user by ID
router.get('/:userID', async (req, res) => {
    try {
        const user = await User.findById(req.params.userID);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a user by ID
router.put('/:userID', upload.single("Photo"), async (req, res) => {
    try {
        // Check if the new username or email already exists
        const existingUser = await User.findOne({
            $or: [
                { Username: req.body.Username },
                { Email: req.body.Email },
            ],
            _id: { $ne: req.params.userID }, // Exclude the current user being updated
        });

        if (existingUser) {
            // If a user with the same username or email exists, return a conflict error
            return res.status(409).json({ error: 'Duplicate username or email' });
        }

        let photoUrl; // Declare a variable to store the photo URL

        if (req.file) {
            // If there's a photo, upload it to Cloudinary
            const b64 = Buffer.from(req.file.buffer).toString("base64");
            let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
            const cldRes = await handleUpload(dataURI);
            photoUrl = cldRes.secure_url; // Extract the secure URL from the Cloudinary response
        }
        console.log(req.file)
        const updatedUserData = {
            ...req.body,
            Photo: photoUrl || null, // Use the photo URL or null if no photo
        };

        // Perform the update if no duplicates are found
        const updatedUser = await User.findByIdAndUpdate(req.params.userID, updatedUserData, { new: true });
        console.log(updatedUser)
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete a user by ID
router.delete('/:userID', async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.userID);
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:userID/wishlist', verifyToken, async (req, res) => {
    try {
        const { userID } = req.params;

        // Ensure the logged-in user is the same as the requested user
        if (userID !== req.userData.UserID) {
            return res.status(403).json({ error: 'Access forbidden' });
        }

        // Fetch the wishlist for the specified user
        const wishlist = await WishList.find({ UserID: userID })
            .populate('ProductID', 'ProductName Price') // Example: Replace with fields you want to populate
            .exec();

        res.status(200).json(wishlist);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get user orders
router.get('/:userID/orders', async (req, res) => {
    try {
        const { userID } = req.params;

        // Use the provided user ID to find orders for that user
        const userOrders = await Order.find({ UserID: userID });

        res.status(200).json(userOrders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
