import { useState } from "react";
import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!username) newErrors.username = "Username is required";
    if (!email) newErrors.email = "Email is required";
    else if (!validateEmail(email)) newErrors.email = "Invalid email format";
    if (!password) newErrors.password = "Password is required";
    else if (!validatePassword(password)) newErrors.password = "Password must be at least 6 characters long";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Submit the form
      console.log("Form submitted", { username, email, password });
    }
  };

  return (
    <Container maxW="container.sm" mt={10}>
      <Box p={8} borderWidth={1} borderRadius={8} boxShadow="lg">
        <Heading as="h1" size="xl" textAlign="center" mb={6}>
          Register
        </Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl isInvalid={errors.username}>
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {errors.username && <Text color="red.500">{errors.username}</Text>}
            </FormControl>
            <FormControl isInvalid={errors.email}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <Text color="red.500">{errors.email}</Text>}
            </FormControl>
            <FormControl isInvalid={errors.password}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <Text color="red.500">{errors.password}</Text>}
            </FormControl>
            <Button type="submit" colorScheme="blue" width="full">
              Register
            </Button>
          </VStack>
        </form>
        <Flex justifyContent="center" mt={4}>
          <Text>Already have an account?</Text>
          <RouterLink to="/login">
            <Text color="blue.500" ml={2}>Login</Text>
          </RouterLink>
        </Flex>
      </Box>
    </Container>
  );
};

export default Register;