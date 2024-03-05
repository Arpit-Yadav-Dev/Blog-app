import React from "react";
import BlogCard from "../components/BlogCard";
import { Grid } from "@chakra-ui/react";

function AllBlogs() {
  return (
    <>
      <Grid
        p={3}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        gap={6}
      >
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </Grid>
    </>
  );
}

export default AllBlogs;
