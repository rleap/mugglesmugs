const Post = require("../models/post");

module.exports = {
  // retrieve all posts
  async getPosts(req, res, next) {
    let posts = await Post.find({});
    res.render("posts/index", { posts });
  },

  // render new post form
  newPost(req, res, next) {
    res.render("posts/new");
  },

  async addNewPost(req, res, next) {
    const newPost = new Post({
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
      location: req.body.location,
    });

    let postAdded = await Post.insert(newPost);
    res.render("posts");
  },
};
