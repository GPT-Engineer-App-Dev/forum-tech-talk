import { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Textarea, VStack, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [errors, setErrors] = useState({});

  const validateTitle = (title) => {
    return title.length >= 5;
  };

  const validateContent = (content) => {
    return content.trim().length > 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!title) newErrors.title = "Title is required";
    else if (!validateTitle(title)) newErrors.title = "Title must be at least 5 characters long";
    if (!content) newErrors.content = "Content is required";
    else if (!validateContent(content)) newErrors.content = "Content cannot be empty";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Submit the form
      console.log("Form submitted", { title, content });
    }
  };

  return (
    <Container maxW="container.md" mt={10}>
      <Box p={8} borderWidth={1} borderRadius={8} boxShadow="lg">
        <Heading as="h1" size="xl" textAlign="center" mb={6}>
          Create New Post
        </Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl isInvalid={errors.title}>
              <FormLabel>Title</FormLabel>
              <Input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              {errors.title && <Text color="red.500">{errors.title}</Text>}
            </FormControl>
            <FormControl isInvalid={errors.content}>
              <FormLabel>Content</FormLabel>
              <Textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              {errors.content && <Text color="red.500">{errors.content}</Text>}
            </FormControl>
            <Button type="submit" colorScheme="blue" width="full">
              Create Post
            </Button>
          </VStack>
        </form>
      </Box>
    </Container>
  );
};

export default CreatePost;