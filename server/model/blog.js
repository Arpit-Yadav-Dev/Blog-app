const mongoose = require("mongoose");
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  image: { data: Buffer, contentType: String },
});

exports.Blog = mongoose.model("Blog", blogSchema);
