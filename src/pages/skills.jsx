import {
  Box,
  Button,
  Text,
} from "@chakra-ui/react";
import { Chart as ChartJS } from 'chart.js/auto'
import {Bar} from 'react-chartjs-2';

import { projects } from "config";

let deployLabels = [];
projects.forEach(project => {
	project.deploy.forEach(e => deployLabels.push(e))
})
deployLabels = [...new Set(deployLabels)];

const deployData = {
	labels: deployLabels,
	datasets: [{
		label: '프로젝트 수',
		data: deployLabels.map(ele => {
			let count = 0;
			projects.forEach(project => {
				project.deploy.forEach(e2 => {
					if(e2 === ele) count++;
				})
			})
			return count
		}),
		borderWidth: 1
	}]
}

let skillLabels = [];
projects.forEach(project => {
	project.skills.forEach(e => skillLabels.push(e))
})
skillLabels = [...new Set(skillLabels)];

const skillsData = {
	labels: skillLabels,
	datasets: [{
		label: '프로젝트 수',
		data: skillLabels.map(ele => {
			let count = 0;
			projects.forEach(project => {
				project.skills.forEach(e2 => {
					if(e2 === ele) count++;
				})
			})
			return count
		}),
		borderWidth: 1
	}]
}

const langLabels = [...new Set(projects.map(e => e.lang))];

const langData = {
	labels: langLabels,
	datasets: [{
		label: '프로젝트 수',
		data: langLabels.map(ele => {
			let count = 0;
			projects.forEach(e => {
				if(e.lang === ele) count++;
			})
			return count
		}),
		borderWidth: 1
	}]
}

const Home = () => {

  return (
    <>
		<Box
		  	mt="15vh"
			display="flex"
			flexDir="column"
			alignItems="center"
			rowGap="10vh"
		>
		  <Box
			  w="50vw"
			  h="70vh"
			  alignItems="center"
		  >
			 <Bar
			  data={langData}
			  options={{
				  scales: {
					  x: {
						  ticks: {
							  color: 'white',
							  font: {
								  size: 20,
							  }
						  }
					  },
					  y: {
						  ticks: {
							  stepSize: 1,
							  font: {
								  size: 20
							  }
						  }
					  },
				  },
				  plugins: {
					  legend: {
						  position: 'right',
						  align:'start',
						  labels: {
							  font: {
								  size: 20,
							  }
						  }

					  }
				  }
			  }}
			/>    
			  <Text
				  align= 'center'
				  ml='-5vw'
				  mt='5vh'
				  fontSize='40px'
				  color="grey"
			  >
				  # Language
			  </Text>
		  </Box>
		  <Box
			  w="50vw"
			  h="70vh"
			  alignItems="center"
		  >
			 <Bar
			  data={skillsData}
			  options={{
				  scales: {
					  x: {
						  ticks: {
							  color: 'white',
							  font: {
								  size: 20,
							  }
						  }
					  },
					  y: {
						  ticks: {
							  stepSize: 1,
							  font: {
								  size: 20
							  }
						  }
					  },
				  },
				  plugins: {
					  legend: {
						  position: 'right',
						  align:'start',
						  labels: {
							  font: {
								  size: 20,
							  }
						  }

					  }
				  }
			  }}
			/>    
			  <Text
				  align= 'center'
				  ml='-5vw'
				  mt='5vh'
				  fontSize='40px'
				  color="grey"
			  >
				  # Skills 
			  </Text>
		  </Box>
		  <Box
			  w="50vw"
			  h="70vh"
			  alignItems="center"
			  mb="10vh"
		  >
			 <Bar
			  data={deployData}
			  options={{
				  scales: {
					  x: {
						  ticks: {
							  color: 'white',
							  font: {
								  size: 20,
							  }
						  }
					  },
					  y: {
						  ticks: {
							  stepSize: 1,
							  font: {
								  size: 20
							  }
						  }
					  },
				  },
				  plugins: {
					  legend: {
						  position: 'right',
						  align:'start',
						  labels: {
							  font: {
								  size: 20,
							  }
						  }

					  }
				  }

			  }}
			/>    
			  <Text
				  align= 'center'
				  ml='-5vw'
				  mt='5vh'
				  fontSize='40px'
				  color="grey"
			  >
				  # Deploy
			  </Text>
		  </Box>
		</Box>

    </>
  );
};

export default Home;
