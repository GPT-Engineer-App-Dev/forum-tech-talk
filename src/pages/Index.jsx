import { Box, Container, Flex, Heading, Link, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl">
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.600" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          Tech Forum
        </Heading>
        <Flex>
          <Link as={RouterLink} to="/" p={2} color="white">
            Home
          </Link>
          <Link as={RouterLink} to="/categories" p={2} color="white">
            Categories
          </Link>
          <Link as={RouterLink} to="/about" p={2} color="white">
            About
          </Link>
          <Link as={RouterLink} to="/contact" p={2} color="white">
            Contact
          </Link>
        </Flex>
      </Flex>

      {/* Main Content Area */}
      <Flex mt={4}>
        {/* Sidebar */}
        <Box as="aside" w="20%" p={4} bg="gray.100" borderRadius="md">
          <Heading as="h2" size="md" mb={4}>
            Sidebar
          </Heading>
          <VStack spacing={2} align="start">
            <Link as={RouterLink} to="/latest">
              Latest Discussions
            </Link>
            <Link as={RouterLink} to="/popular">
              Popular Discussions
            </Link>
            <Link as={RouterLink} to="/tags">
              Tags
            </Link>
          </VStack>
        </Box>

        {/* Discussions */}
        <Box as="main" w="80%" p={4}>
          <Heading as="h2" size="md" mb={4}>
            Discussions
          </Heading>
          <Text>Welcome to the Tech Forum! Here you can find discussions on various tech topics.</Text>
        </Box>
      </Flex>

      {/* Footer */}
      <Box as="footer" bg="blue.600" color="white" p={4} mt={4} textAlign="center">
        <Text>&copy; 2023 Tech Forum. All rights reserved.</Text>
        <Flex justifyContent="center" mt={2}>
          <Link as={RouterLink} to="/privacy" p={2} color="white">
            Privacy Policy
          </Link>
          <Link as={RouterLink} to="/terms" p={2} color="white">
            Terms of Service
          </Link>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;