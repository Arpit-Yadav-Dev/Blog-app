import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Input,
  Textarea,
  Button,
  Grid,
  GridItem,
  Select,
  FormControl,
  FormLabel,
  FormHelperText,
  Image,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setSelectedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const categories = ["Technology", "Travel", "Food", "Fashion"];

  return (
    <Box p={4}>
      <Heading as="h4" size="md" mb={4}>
        Add Details to Add Blog
      </Heading>
      <Flex>
        <Box mr={8}>
          <FormControl>
            <FormLabel>Upload Image</FormLabel>
            {selectedImage ? (
              <Image
                src={selectedImage}
                alt="Selected Preview"
                mb={2}
                width={"400px"}
                height={"280px"}
              />
            ) : (
              <Box
                width={"400px"}
                height={"280px"}
                borderWidth="1px"
                borderRadius="lg"
                p={4}
                textAlign="center"
                cursor="pointer"
                onClick={() => document.getElementById("imageInput").click()}
              >
                <img
                  width={"100%"}
                  height={"100%"}
                  src="https://cdn.dribbble.com/users/419257/screenshots/1724076/scanningwoohoo.gif"
                  alt="Click to upload image"
                />

                <FormHelperText mt={4}> Click to upload image</FormHelperText>
              </Box>
            )}
            <input
              type="file"
              id="imageInput"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageUpload}
            />
          </FormControl>
        </Box>

        <Box flex={1}>
          <form>
            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
              <GridItem colSpan={1}>
                <Box>
                  <FormLabel htmlFor="title">Title</FormLabel>
                  <Input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Enter the title"
                    mb={2}
                  />
                </Box>
              </GridItem>

              <GridItem colSpan={1}>
                <Box>
                  <FormLabel htmlFor="categories">Categories</FormLabel>
                  <Select
                    id="categories"
                    name="categories"
                    _placeholder={{ color: "gray.500" }}
                    placeholder="Select categories"
                    isMulti={true}
                    mb={2}
                  >
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                </Box>
              </GridItem>

              <GridItem colSpan={2}>
                <Box>
                  <FormLabel htmlFor="description">Description</FormLabel>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Enter the blog description"
                    resize="vertical"
                    mb={2}
                  />
                </Box>
              </GridItem>
            </Grid>

            <Flex justify="flex-start" mt={4}>
              <Button
                onClick={() => navigate("/myBlogs")}
                //    type="submit"
                colorScheme="teal"
              >
                Add Blog
              </Button>
            </Flex>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

export default AddBlog;
