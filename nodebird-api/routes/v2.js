const express = require('express');

const { verifyToken, apiLimiter, corsWhenDomainMatches } = require('../middlewares');
const { createToken, tokenTest, getMyPosts, getPostsByHashtag, editPost, deletePost, getPostById, getAllPost } = require('../controllers/v2');

const router = express.Router();

router.use(corsWhenDomainMatches);

router.post('/token', apiLimiter, createToken);
router.get('/test', apiLimiter, verifyToken, tokenTest);
router.get('/posts/my', apiLimiter, verifyToken, getMyPosts);
router.get('/posts/hashtag/:title', apiLimiter, verifyToken, getPostsByHashtag);

router.get('/posts', apiLimiter, verifyToken, getAllPost);
router.get('/posts/edit/:id', apiLimiter, verifyToken, editPost);
router.get('/posts/delete/:id', apiLimiter, verifyToken, deletePost);
router.get('/posts/get/:id', apiLimiter, verifyToken, getPostById);
router.get('/posts/post/:id', apiLimiter, verifyToken, getPostById); 

module.exports = router;
