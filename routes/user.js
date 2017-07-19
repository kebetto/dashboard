var express = require('express');
var router = express.Router();

var User = require('../models/user');

router.get('/',(req, res, next) => {
    User.find()
        .exec((err, users) => {
            if (err) {
                return res.status(500).json({
                    title: 'An error occured',
                    error: err
            });
        }
        res.status(200).json({
            message: 'Success',
            obj: users
        });
     });
});

module.exports = router;