import Signup from "./auth/SignUp";
import Login from "./auth/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoPageFound from "./NoPageFound";
import Navbar from "./parts/Navbar";
import AllBlogs from "./pages/AllBlogs";
import SinlgeBlogPage from "./pages/SinlgeBlogPage";
import UserInfo from "./pages/UserInfo";
import MyBlogs from "./pages/MyBlogs";
import AddBlog from "./pages/AddBlog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/allBlogs" element={<AllBlogs />} />
          <Route path="/singleBlog/:id" element={<SinlgeBlogPage />} />
          <Route path="/profile" element={<UserInfo />} />
          <Route path="/myBlogs" element={<MyBlogs />} />
          <Route path="/addBlog" element={<AddBlog />} />
          <Route path="*" element={<NoPageFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
