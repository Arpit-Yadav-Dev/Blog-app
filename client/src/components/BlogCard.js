import {
  Box,
  Heading,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
  GridItem,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const BlogTags = (props) => {
  const { marginTop = 0, tags } = props;

  return (
    <HStack spacing={2} marginTop={marginTop}>
      {tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

const BlogAuthor = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();
  return (
    // <Container maxW={"9xl"} p="3">
    //   <Divider marginTop="5" />
    //   <Wrap spacing="30px" marginTop="5">
    //     <WrapItem width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}>
    <GridItem>
      <Box w="100%">
        <Box borderRadius="lg" overflow="hidden">
          <Box
            onClick={() => navigate("/singleBlog/" + blog._id)}
            cursor={"pointer"}
            textDecoration="none"
            _hover={{ textDecoration: "none" }}
          >
            <Image
              transform="scale(1.0)"
              src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
              alt="some text"
              objectFit="contain"
              width="100%"
              transition="0.3s ease-in-out"
              _hover={{
                transform: "scale(1.05)",
              }}
            />
          </Box>
        </Box>
        {/* <BlogTags tags={["Engineering", "Product"]} marginTop={3} /> */}
        <BlogTags tags={[blog.category]} marginTop={3} />
        <Heading fontSize="xl" marginTop="2">
          <Text textDecoration="none" _hover={{ textDecoration: "none" }}>
            {blog.title}
          </Text>
        </Heading>
        <Text as="p" fontSize="md" marginTop="2">
          {blog.description}
        </Text>
        <BlogAuthor name="John Doe" date={new Date("2021-04-06T19:01:27Z")} />
      </Box>
    </GridItem>
    //     </WrapItem>
    //   </Wrap>
    // </Container>
  );
};

export default BlogCard;
