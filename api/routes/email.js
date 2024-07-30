const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'response from email router' });
});

router.post('/', (req, res) => {
    const { email, subject, message } = req.body;

    if (!email || !subject || !message) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    res.json({ email, subject, message });
});

module.exports = router;