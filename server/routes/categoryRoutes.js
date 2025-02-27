const express = require('express');
const router = express.Router();
const Category = require('../models/Category');

router.get('/search', async (req, res) => {
    try {
        const searchQuery = req.query.query;
        if (!searchQuery) {
            return res.status(400).json({ error: 'Search query parameter is required' });
        }

        const isNumeric = !isNaN(searchQuery);
        
        const categories = await Category.find({
            $or: [
                { CategoryID: isNumeric ? parseInt(searchQuery) : null }, // Check if it's a number
                { CategoryName: { $regex: new RegExp(searchQuery, 'i') } },
            ],
        });

        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// Create a new category
router.post('/', async (req, res) => {
    try {
        const category = new Category(req.body);
        await category.save();
        res.status(201).json(category);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all categories
router.get('/', async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a specific category by ID
router.get('/:id', async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(404).json({ error: 'Category not found' });
        }
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a category by ID
router.put('/:id', async (req, res) => {
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!category) {
            return res.status(404).json({ error: 'Category not found' });
        }
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete a category by ID
router.delete('/:id', async (req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);
        if (!category) {
            return res.status(404).json({ error: 'Category not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
