import {
  Button,
  Checkbox,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  InputRightElement,
  FormErrorMessage,
  InputGroup,
  useToast,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import apiInstance from "../api/apiInstance";
import { apiList } from "../api/apiList";

export default function Login() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  function onSubmit(values) {
    return new Promise((resolve, reject) => {
      apiInstance
        .post(apiList.login, values)
        .then((response) => {
          console.log(response);
          localStorage.setItem("authToken", response.data.token);
          toast({
            title: "Welcome User",
            description: "Login Successfull",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
          resolve();
          setTimeout(() => {
            navigate("/allBlogs");
          }, 2000);
        })
        .catch((error) => {
          toast({
            title: "login Failed",
            description: "Check creadential and Try Again",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
          reject();
        });
    });
    // navigate("/allBlogs");
  }

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>Sign in to your account</Heading>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl id="email" isInvalid={errors.email}>
              <FormLabel>Email address</FormLabel>
              <Input
                {...register("email", {
                  required: "This field is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                type="email"
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl id="password" isInvalid={errors.password}>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  {...register("password", {
                    required: "This field is required",
                    minLength: {
                      value: 4,
                      message: "Password should be at least 4 characters",
                    },
                    pattern: {
                      value: /^(?=.*[!@#$%^&*])/,
                      message: "Password must contain at least one symbol",
                    },
                  })}
                  type={showPassword ? "text" : "password"}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                {/* <Checkbox>Remember me</Checkbox> */}
                <Text color={"blue.500"}>
                  {" "}
                  <Link to={"/"}>Don't have Account?</Link>
                </Text>
              </Stack>
              <Button
                type="submit"
                loadingText="verifying..."
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                isLoading={isSubmitting}
              >
                Sign in
              </Button>
            </Stack>
          </form>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
          }
        />
      </Flex>
    </Stack>
  );
}
