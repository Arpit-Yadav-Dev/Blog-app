import Signup from "./auth/SignUp";
import Login from "./auth/Login";
import { Route, Routes } from "react-router-dom";
import NoPageFound from "./NoPageFound";
import Navbar from "./parts/Navbar";

function App() {
  return (
    <>
      <Navbar />
      {/* <Signup /> */}
      <Login />
      {/* <Routes> */}
      {/* <Route path="/" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<NoPageFound />} /> */}
      {/* </Routes> */}
    </>
  );
}

export default App;
