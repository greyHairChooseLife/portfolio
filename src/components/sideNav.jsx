import { Box, Button, Icon, Link as ChakraLink, Text } from "@chakra-ui/react";
import NextLink from "next/link";

import { MAX_WIDTH } from "config";

const Footer = () => {
  return (
	<Box
		h="100vh"
		bg="yellow.500"
		display="flex"
		flexDir="column"
		justifyContent="space-around"
		py="20vh"
	>
		<Box px="10%" h="8vh" >
			<NextLink href="/">
				<Button
					w="100%"
					h="100%"
					bg="none"
					_focus={{ bg:"#1a202c" }}
					fontSize="30px"
				>
					Greeting :)
				</Button>
			</NextLink>
		</Box>
		<Box px="10%" h="8vh" >
			<NextLink href="/skills">
				<Button
					w="100%"
					h="100%"
					bg="none"
					_focus={{ bg:"#1a202c" }}
					fontSize="30px"
				>
					Lang. Skill. Deploy
				</Button>
			</NextLink>
		</Box>
		<Box px="10%" h="8vh" >
			<NextLink href="/side_projects">
				<Button
					w="100%"
					h="100%"
					bg="none"
					_focus={{ bg:"#1a202c" }}
					fontSize="30px"
				>
					Side Projects
				</Button>
			</NextLink>
		</Box>
		<Box px="10%" h="8vh" >
			<NextLink href="/personality">
				<Button
					w="100%"
					h="100%"
					bg="none"
					_focus={{ bg:"#1a202c" }}
					fontSize="30px"
				>
					Personality
				</Button>
			</NextLink>
		</Box>
    </Box>
  );
};

export default Footer;
