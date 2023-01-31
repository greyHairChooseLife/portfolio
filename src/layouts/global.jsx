import { Box } from "@chakra-ui/react";

import { MAX_WIDTH, MAX_NAV_WIDTH } from "config";
import SideNav from "@/components/sideNav";

    //<Header />
const Layout = ({ children }) => (
  <>
	  <Box
		  display="flex"
		  flexDir="row"
	  >
		<Box
			order="2"
			w="20vw"
			display="block"
			pos="fixed"
		>
			<SideNav />
		</Box>
		<Box 
			w="80vw"
			ml="20vw"
		>
			<Box as="main" px={[4, 6, 10, 14, 20]} maxW={MAX_WIDTH} mx="auto">
				{children}
			</Box>
		</Box>
	  </Box>
  </>
);

export default Layout;
