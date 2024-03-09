import React, { useEffect, useState } from "react";
import SingleBlogCard from "../components/SingleBlogCard";
import { useParams } from "react-router-dom";
import { apiList } from "../api/apiList";
import apiInstance from "../api/apiInstance";

function SinlgeBlogPage() {
  const { id } = useParams();
  const [blog, setblog] = useState([]);

  const getBlog = (id) => {
    apiInstance
      .get(apiList.getSingle + id)
      .then((response) => {
        setblog(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getBlog(id);
  }, []);

  return (
    <div>
      <SingleBlogCard blog={blog} />
    </div>
  );
}

export default SinlgeBlogPage;
