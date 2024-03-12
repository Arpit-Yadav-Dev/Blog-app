const express = require("express");
const router = express.Router();
const blogController = require("../controller/blog");

router
  .post(
    "/create",
    blogController.createBlogWithImageUpload,
    blogController.createBlog
  )
  .get("/getAll", blogController.getAllBlogs)
  .get("/getSingle:id", blogController.getBlog)
  .put("/:id", blogController.replaceBlog)
  .patch("/:id", blogController.updateBlog)
  .delete("/:id", blogController.deleteBlog);

exports.router = router;
