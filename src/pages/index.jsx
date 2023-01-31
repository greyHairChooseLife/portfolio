import {
  Box,
  Button,
  Text,
} from "@chakra-ui/react";
import NextImage from "next/image";

const Home = () => {

const handleCopyClipBoard = async text => {
    try {
      await navigator.clipboard.writeText(text);
      alert('메일 주소가 복사되었습니다.');
    } catch (e) {
      alert('fail');
    }
};

  return (
    <>
      <Box
        as="section"
        d="flex"
        alignItems="center"
        flexDir="column"
        textAlign="center"
        py="10"
      >
        <NextImage
          src="/me.jpg"
          width="350"
          height="450"
          alt="myself in Yangyang"
          placeholder="blur"
          blurDataURL="L5I~of#i004mgjw]-4XA00?wL#xu"
          priority
        />
        <Box
			mt="20"
		>
			<Text
				fontSize="30px"
				mb="10"
			>
			  김상연
			</Text>
			<Text
				fontSize="20px"
				mb="3"
			>
			  010.9639.7703
			</Text>
			<Button
				variant="ghost"
				size="lg"
				fontSize="20px"
				onClick={() => handleCopyClipBoard('greyhairchooselife@gmail.com')}
			>
				click to copy mail
			</Button>

			<Box
				mt="15"
			>
				<Button
					colorScheme="telegram"
					variant="ghost"
					size="lg"
					fontSize="20px"
				>
					<a target="_blank" href="https://github.com/greyHairChooseLife/" rel="noopener noreferrer">
						github	
					</a>
				</Button>
				<Button
					colorScheme="telegram"
					variant="ghost"
					size="lg"
					fontSize="20px"
				>
					<a target="_blank" href="https://velog.io/@chooslife" rel="noopener noreferrer">
						velog
					</a>
				</Button>
			</Box>
        </Box>
      </Box>

    </>
  );
};

export default Home;
