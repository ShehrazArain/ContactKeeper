const express = require('express')
const router = express.Router();

// @route   POST api/users
// @desc    Register in user
// @access  Public
router.post('/', (req, res) => {
    res.send('User Route')
})

module.exports = router;