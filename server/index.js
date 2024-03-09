// using express server
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const { userInfo } = require("os");
const server = express();
const userRouter = require("./routes/user");
const blogRouter = require("./routes/blog");
const jwt = require("jsonwebtoken");
const authRouter = require("./routes/auth");
const fs = require("fs");
const path = require("path");
const publicKey = fs.readFileSync(
  path.resolve(__dirname, "./public.key"),
  "utf-8"
);
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Database Connected");
}
const authentication = (req, res, next) => {
  try {
    const token = req.get("authorization");
    // .split("Bearer ")[1]
    var decoded = jwt.verify(token, publicKey);
    console.log(decoded);
    if (decoded.email) {
      next();
    } else {
      res.sendStatus(401);
    }
  } catch {
    res.sendStatus(401);
  }
};

server.use(cors());
server.use(express.json()); // for reading body
server.use(morgan("default")); // using the third party middleware
server.use("/auth", authRouter.router);
server.use("/blogs", authentication, blogRouter.router); // this is the base url in simple terms
server.use("/users", authentication, userRouter.router); // this is for the users

server.listen(process.env.PORT, () => console.log("Server Started"));
module.exports = server;
