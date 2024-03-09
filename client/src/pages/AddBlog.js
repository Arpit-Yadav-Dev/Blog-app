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
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { apiList } from "../api/apiList";
import apiInstance from "../api/apiInstance";

const AddBlog = () => {
  const {
    handleSubmit,
    register,
    reset,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm();
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();
  const toast = useToast();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setSelectedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
    reset({ ...getValues(), image: event.target.files });
  };

  const categories = ["Technology", "Travel", "Food", "Fashion"];

  function onSubmit(values) {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("category", values.category);
    formData.append("description", values.description);
    formData.append("image", values.image[0]);

    return new Promise((resolve, reject) => {
      apiInstance
        .post(apiList.addBlog, formData)
        .then((response) => {
          toast({
            title: "Success",
            description: response.data.message,
            status: "success",
            duration: 2000,
            isClosable: true,
          });
          reset();
          resolve();
          setTimeout(() => {
            navigate("/allBlogs");
          }, 2000);
        })
        .catch((error) => {
          toast({
            title: "Failed",
            description: error.message,
            status: "error",
            duration: 3000,
            isClosable: true,
          });
          reject();
        });
    });
  }
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
              <GridItem colSpan={1}>
                <Box>
                  <FormControl isInvalid={errors.title}>
                    <FormLabel htmlFor="title">Title</FormLabel>
                    <Input
                      placeholder="Title for the blog"
                      {...register("title", {
                        required: "This field is required",
                      })}
                      type="text"
                    />
                    <FormErrorMessage>
                      {errors.title && errors.title.message}
                    </FormErrorMessage>
                  </FormControl>
                </Box>
              </GridItem>

              <GridItem colSpan={1}>
                <Box>
                  <FormControl isInvalid={errors.category}>
                    <FormLabel htmlFor="category">Category</FormLabel>
                    <Select
                      placeholder="select category"
                      {...register("category", {
                        required: "This field is required",
                      })}
                      type="text"
                    >
                      <option value="technology">Technology</option>
                      <option value="travel">Travel</option>
                      <option value="health">Health</option>
                      <option value="fashion">Fashion</option>
                      <option value="food">Food</option>
                      <option value="lifestyle">Lifestyle</option>
                      <option value="fitness">Fitness</option>
                      <option value="science">Science</option>
                      <option value="personaldevelopment">
                        Personal Development
                      </option>
                      <option value="entertainment">Entertainment</option>
                    </Select>
                    <FormErrorMessage>
                      {errors.category && errors.category.message}
                    </FormErrorMessage>
                  </FormControl>
                </Box>
              </GridItem>

              <GridItem colSpan={2}>
                <Box>
                  <FormControl isInvalid={errors.description}>
                    <FormLabel htmlFor="description">Description</FormLabel>
                    <Textarea
                      rows={6}
                      placeholder="Enter the blog description"
                      {...register("description", {
                        required: "This field is required",
                      })}
                      type="text"
                    />
                    <FormErrorMessage>
                      {errors.description && errors.description.message}
                    </FormErrorMessage>
                  </FormControl>
                </Box>
              </GridItem>
            </Grid>

            <Flex justify="flex-start" mt={4}>
              <Button
                type="submit"
                loadingText="Adding..."
                colorScheme="teal"
                _hover={{
                  bg: "blue.500",
                }}
                isLoading={isSubmitting}
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
