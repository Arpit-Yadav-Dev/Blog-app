import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  HStack,
  InputRightElement,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
  Box,
  FormErrorMessage,
  InputGroup,
} from "@chakra-ui/react";
import { SmallCloseIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export default function MyProfile() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      firstName: "dsjd",
      lastName: "jhkfjh",
      email: "dhh@gmail.com",
      password: "13@3",
    },
  });
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  function onSubmit(values) {
    console.log(values);
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 3000);
    });

    // console.log(values);
    // reset();
    // navigate("/login");
  }
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
          Your Profile
        </Heading>
        <FormControl id="userName">
          <FormLabel>Profile Picture</FormLabel>
          <Stack direction={["column", "row"]} spacing={6}>
            <Center>
              <Avatar
                size="xl"
                src="https://th.bing.com/th/id/OIP.rA8CA2gXV_VluPc8udkwTQHaGB?rs=1&pid=ImgDetMain"
              >
                <AvatarBadge
                  as={IconButton}
                  size="sm"
                  rounded="full"
                  top="-10px"
                  colorScheme="red"
                  aria-label="remove Image"
                  icon={<SmallCloseIcon />}
                />
              </Avatar>
            </Center>
            <Center w="full">
              <Button w="full">Change Icon</Button>
            </Center>
          </Stack>
        </FormControl>
        <form onSubmit={handleSubmit(onSubmit)}>
          <HStack>
            <Box>
              <FormControl isInvalid={errors.firstName}>
                <FormLabel htmlFor="firstName">First Name</FormLabel>
                <Input
                  {...register("firstName", {
                    required: "This field is required",
                  })}
                  type="text"
                />
                <FormErrorMessage>
                  {errors.firstName && errors.firstName.message}
                </FormErrorMessage>
              </FormControl>
            </Box>
            <Box>
              <FormControl isInvalid={errors.lastName}>
                <FormLabel>Last Name</FormLabel>
                <Input
                  {...register("lastName", {
                    required: "This field is required",
                  })}
                  type="text"
                />
                <FormErrorMessage>
                  {errors.lastName && errors.lastName.message}
                </FormErrorMessage>
              </FormControl>
            </Box>
          </HStack>

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

          <Stack spacing={6} mt={4} direction={["column", "row"]}>
            <Button
              bg={"red.400"}
              color={"white"}
              w="full"
              _hover={{
                bg: "red.500",
              }}
              onClick={() => navigate("/allBlogs")}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              loadingText="updating..."
              bg={"green.400"}
              color={"white"}
              _hover={{
                bg: "green.500",
              }}
              w="full"
              isLoading={isSubmitting}
            >
              Update
            </Button>
          </Stack>
        </form>
      </Stack>
    </Flex>
  );
}
