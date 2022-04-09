const express = require('express');
const tagsRouter = express.Router();
const {getPostsByTagName} = require('../db')



tagsRouter.get('/:tagName/posts', async (req, res, next) => {
   let {tagName} = req.params
    tagName = decodeURIComponent(tagName)
    // read the tagname from the params
    try {
        const posts = await getPostsByTagName(tagName);
      // use our method to get posts by tag name from the db
      // send out an object to the client { posts: // the posts }
      console.log(posts)
      res.send({posts:posts})
    } catch ({ name, message }) {
        next({name, message});
      // forward the name and message to the error handler
    }
  });




  module.exports = tagsRouter;