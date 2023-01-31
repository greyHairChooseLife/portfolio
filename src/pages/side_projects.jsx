import {
  Box,
	Grid,
	GridItem,
	Icon,
  Button,
  Text,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import NextLink from "next/link";

import { projects } from "config";

const Home = () => {

	const makeGridItem = (name, githubUrl, lang, skills, explain, background) => {
		return (
			<Grid
				templateRows='repeat(2, 1fr)'
				templateColumns='repeat(8, 1fr)'
				gap={4}
				my="13vh"
			>
				<GridItem rowSpan={1} colSpan={2} alignSelf="center" textAlign="center">
					<Text fontSize="23">
						{name}
					</Text>
				</GridItem>
				<GridItem rowSpan={1} colSpan={1} alignSelf="center" textAlign="center">
					<Button bg="transparent"  _hover={{borderBottom: '1px', borderColor: "yellow"}}>
						<a target="_blank" href={githubUrl} rel="noopener noreferrer">
							<Icon as={FaGithub} w="10" h="10"/>
						</a>
					</Button>
				</GridItem>
				<GridItem rowSpan={2} colSpan={5} border="1px" borderColor="papayawhip" borderRadius="10" p="5">
					<Text fontSize="25" color="yellow.100" mb="3">
						# 배경
					</Text>
					{background.map((e, i) => {
						return i === explain.length -1 ? <><Text>{e}</Text><br/></> : <><Text>{e}</Text><br/></>
					})}
					<Text fontSize="25" color="yellow.100" mb="3" mt="4">
						# 기능
					</Text>
					{explain.map((e, i) => {
						return i === explain.length -1 ? <Text>{e}</Text> : <><Text>{e}</Text><br/></>
					})}
				</GridItem>
				<GridItem rowSpan={1} colSpan={3} paddingX={3}>
					<NextLink href="/skills">
						<Button m="1" bg='blue'>{lang}</Button>
					</NextLink>
					{skills.map(e => {
						return (
							<NextLink href="/skills">
								<Button m="1" bg='tomato'>{e}</Button>
							</NextLink>
						)
					})}
				</GridItem>
			</Grid>
		)
	}

  return (
    <>
		<Box
			my="5vh"
		>
			{projects.map(e => {
				return makeGridItem(e.name, e.githubUrl, e.lang, [...e.skills, ...e.deploy], e.explain, e.background)
			})}
		</Box>

    </>
  );
};

export default Home;
