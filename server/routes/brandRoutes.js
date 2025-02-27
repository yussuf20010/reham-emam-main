const express = require('express');
const router = express.Router();
const Brand = require('../models/Brand');
const mongoose = require('mongoose');

router.get('/search', async (req, res) => {
    try {
        const query = req.query.query;

        if (!query) {
            return res.status(400).json({ error: 'Search query parameter is missing' });
        }

        const searchResults = await Brand.find({
            $or: [
                { BrandName: { $regex: new RegExp(query, 'i') } },
                { Description: { $regex: new RegExp(query, 'i') } },
                // Add other fields to search as needed
            ],
        });

        res.json(searchResults);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Get all brands
router.get('/', async (req, res) => {
    try {
        const brands = await Brand.find();
        res.json(brands);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a specific brand by ID
router.get('/:id', async (req, res) => {
    try {
        const brand = await Brand.findById(req.params.id);
        if (!brand) {
            return res.status(404).json({ error: 'Brand not found' });
        }
        res.json(brand);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Create a new brand
router.post('/', async (req, res) => {
    try {
        // Cast RoleId to ObjectId
        req.body.RoleID = new mongoose.Types.ObjectId(req.body.RoleID);

        // Create a new Brand
        const newBrand = await Brand.create(req.body);

        res.status(201).json(newBrand);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// Update a brand by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedBrand = await Brand.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedBrand) {
            return res.status(404).json({ error: 'Brand not found' });
        }
        res.json(updatedBrand);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Delete a brand by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedBrand = await Brand.findByIdAndDelete(req.params.id);
        if (!deletedBrand) {
            return res.status(404).json({ error: 'Brand not found' });
        }
        res.json({ message: 'Brand deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
