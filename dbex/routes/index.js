const express = require('express');  
const User = require('../models/user');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const users = await User.findAll();
        res.render('sequelize', { users });  
    } catch (err) {
        next(err);  
    }
});

module.exports = router;


// const express = require('sequelize');
// const User = require('../models/user');


// const router = express.Router();

// router.get('/', async (req, res, next) => {
//     const users = await User.findAll();
//     res.render('sequelize', users);
// });

// module.exports = router;