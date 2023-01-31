import {
	Box,
	Grid,
	GridItem,
	Icon,
	Button,
	Text,
} from "@chakra-ui/react";
import { GiCamel, GiLion } from "react-icons/gi";
import { FaChild } from "react-icons/fa";

const Personality = () => {

  return (
    <>
		<Box my="5vh">
			<Box borderTop="1px" pt="2vh" mt="10vh">
				<Box borderRight="1px" pr="3vw" display="inline-block" ml="10vw" mt="-6vh">
					<Icon as={GiCamel} w="10" h="10" mt="4vh"></Icon>
					<Text>
						20 y
					</Text>
				</Box>
				<Box borderRight="1px" pr="3vw" display="inline-block" ml="10vw" mt="-4vh">
					<Icon as={GiLion} w="10" h="10" mt="4vh"></Icon>
					<Text>
						25 y
					</Text>
				</Box>
				<Box borderRight="" pr="3vw" display="inline-block" ml="10vw" mt="-4vh">
					<Icon as={FaChild} w="10" h="10" mt="4vh"></Icon>
					<Text>
						now
					</Text>
				</Box>
				<Box mt="8vh">
					<Text fontSize="20" mb="5">
						허락된 범위에서 즐거운 단계
					</Text>
					<Text lineHeight="8">
						- 예의 바름
					</Text>
					<Text lineHeight="8">
						- 학교 생활도 성실함
					</Text>
					<Text lineHeight="8">
						- 왜 그래야 하는지는 모름
					</Text>
					<Text lineHeight="8">
						- 자유 시간엔 축구, 농구만(흥미)
					</Text>
				</Box>
				<Box ml="15vw" mt="4vh">
					<Text fontSize="20" mb="5">
						자유의지가 아닌 것들에 반항하는 단계
					</Text>
					<Text lineHeight="8">
						- 대학생활을 맛 보고는 "흘러가는 대로 살다가는 재미 없는 시시한 인생을 살게 된다"는 위기를 의식
					</Text>
					<Text lineHeight="8">
						- 자퇴 후 경제적 독립 선언
					</Text>
					<Text lineHeight="8">
						- 다양한 환경에서 먹고 살아보며, 의지가 있다면 어디에서든 살아 남아 더 나은 내일을 만들 수 있다는 자신감을 얻음
					</Text>
				</Box>
				<Box ml="32vw" mt="5vh">
					<Text fontSize="20" mb="5">
						 삶을 선택하는 단계
					</Text>
					<Text lineHeight="8">
						- 하고싶은 일을 찾고, 계획하고, 실행하기
					</Text>
					<Text lineHeight="8">
						- 내 삶을 사랑하는 만큼 다른 사람의 삶도 최대한 존중하기
					</Text>
					<Text lineHeight="8">
						- 어쩔 수 없는 것은 내버려 두고, 할 수 있는 것에 집중하기(긍정적 사고)
					</Text>
				</Box>
			</Box>
		</Box>

    </>
  );
};

export default Personality;
