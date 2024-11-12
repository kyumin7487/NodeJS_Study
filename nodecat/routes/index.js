const express = require('express');
const {
  test,
  getMyPosts,
  searchByHashtag,
  //renderMain,
  renderMain,
  editPost,
  deletePost,
} = require('../controllers');

const router = express.Router();

router.get('/test', test);

router.get('/myposts', getMyPosts);
router.get('/search/:hashtag', searchByHashtag);
router.get('/', renderMain);
router.post('/post/:id', editPost);
router.delete('/post/:id', deletePost);

module.exports = router;
