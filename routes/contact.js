const express = require('express')
const router = express.Router();
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator')

const User = require('../models/User')
const Contact = require('../models/Contact')

// @route   GET api/contacts
// @desc    Get all users contact
// @access  Private
router.get('/', [auth], async (req, res) => {
    try {
        const contacts = await Contact.find({ user: req.user.id }).sort({ date: -1 });
        res.json(contacts)
    } catch (err) {
        console.error(err.message)
        return res.status(500).json({ msg: "Server Error " })
    }
})


// @route   POST api/contacts
// @desc    Add new contact
// @access  Private
router.post('/', [auth, [
    check('name', 'Name is required').not().isEmpty()
]], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { name, email, phone, type } = req.body;
    try {
        const newContacts = new Contact({
            name,
            email,
            phone,
            type,
            user: req.user.id
        })

        const contacts = await newContacts.save();
        res.send(contacts)

    } catch (err) {
        console.error(err.message)
        return res.status(500).json({ json: "Server Error" })
    }
})


// @route   PUT api/contacts/:id
// @desc    Update contact
// @access  Private
router.put('/:id', (req, res) => {
    res.send('GET all Contacts')
})


// @route   DELETE api/contacts
// @desc    Delete contact
// @access  Private
router.delete('/', (req, res) => {
    res.send('Delete Contacts')
})

module.exports = router;