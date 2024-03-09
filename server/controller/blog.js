const model = require("../model/blog");
const mongoose = require("mongoose");
const Blog = model.Blog;

exports.createBlog = async (req, res) => {
  const blog = new Blog(req.body);
  try {
    const savedBlog = await blog.save();
    res.status(201).json({ message: "Blog Added Successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err });
  }
};

// http://localhost:8080/products?price=-1   but working below one !!
exports.getAllBlogs = async (req, res) => {
  try {
    console.log(req.query);
    let query = Blog.find();
    if (req.query) {
      const blogs = await query.sort(req.query).exec();
      res.json(blogs);
    } else {
      const blogs = await query.exec();
      res.json(blogs);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getBlog = async (req, res) => {
  const id = req.params.id;
  const blog = await Blog.findById(id);
  res.json(blog);
};

exports.replaceBlog = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Blog.findOneAndReplace({ _id: id }, req.body);
    res.status(201).json(doc);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.updateBlog = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Blog.findOneAndUpdate({ _id: id }, req.body);
    res.status(201).json(doc);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.deleteBlog = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Blog.findOneAndDelete({ _id: id });
    res.status(201).json(doc);
  } catch (error) {
    res.status(400).json(error);
  }
};
