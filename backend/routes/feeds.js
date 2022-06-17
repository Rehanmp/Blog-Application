const express = require('express')

const router = express.Router()

const feedController = require('../controllers/feed')

router.get('/post', feedController.getPost)
router.post('/Add-post', feedController.createPost)


module.exports = router