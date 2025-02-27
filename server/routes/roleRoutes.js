const express = require('express');
const router = express.Router();
const UserRole = require('../models/UserRole'); // Adjust the path accordingly


// Search for user roles based on query
router.get('/search', async (req, res) => {
    try {
        const { query } = req.query;

        if (!query) {
            return res.status(400).json({ error: 'Search query is required' });
        }

        // Find user roles that match the query
        const userRoles = await UserRole.find({ RoleName: { $regex: new RegExp(query, 'i') } });
        res.json(userRoles);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Get all user roles
router.get('/', async (req, res) => {
    try {
        const userRoles = await UserRole.find();
        res.json(userRoles);
    } catch (error) {
        res.status(500).json({ error });
    }
});

// Get a specific user role by ID
router.get('/:id', async (req, res) => {
    try {
        const userRole = await UserRole.findById(req.params.id);
        if (!userRole) {
            return res.status(404).json({ error: 'User role not found' });
        }
        res.json(userRole);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Create a new user role
router.post('/', async (req, res) => {
    try {
        const newUserRole = await UserRole.create(req.body);
        res.status(201).json(newUserRole);
    } catch (error) {
        res.status(500).json({ error });
    }
});

// Update a user role by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedUserRole = await UserRole.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUserRole) {
            return res.status(404).json({ error: 'User role not found' });
        }
        res.json(updatedUserRole);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Delete a user role by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedUserRole = await UserRole.findByIdAndDelete(req.params.id);
        if (!deletedUserRole) {
            return res.status(404).json({ error: 'User role not found' });
        }
        res.json({ message: 'User role deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
