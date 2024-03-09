import React, { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import { Grid, useAccordion } from "@chakra-ui/react";
import { apiList } from "../api/apiList";
import apiInstance from "../api/apiInstance";

function AllBlogs() {
  const [allBlogs, setallBlogs] = useState([]);

  const getAllBlogs = () => {
    apiInstance.get(apiList.getBlogs).then((response) => {
      setallBlogs(response.data);
    });
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <>
      <Grid
        p={3}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        gap={6}
      >
        {allBlogs?.map((blog) => (
          <BlogCard blog={blog} />
        ))}
      </Grid>
    </>
  );
}

export default AllBlogs;
