import React from "react";
import SingleBlogCard from "../components/SingleBlogCard";
import { useParams } from "react-router-dom";

function SinlgeBlogPage() {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <SingleBlogCard />
    </div>
  );
}

export default SinlgeBlogPage;
