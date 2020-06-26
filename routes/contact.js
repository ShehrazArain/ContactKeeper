const express = require('express')
const router = express.Router();

// @route   GET api/contacts
// @desc    Get all users contact
// @access  Private
router.get('/', (req, res) => {
    res.send('GET all Contacts')
})


// @route   POST api/contacts
// @desc    Add new contact
// @access  Private
router.post('/', (req, res) => {
    res.send('Add Contacts')
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