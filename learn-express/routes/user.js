const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    const name = req.query.name;
    console.log(name);
    res.send('Hello, User');
});

router.get('/:userId', (req, res) => {
    const id = req.params.userId;
    res.end('Hello, user' + id + '!!!');
})

module.exports = router;