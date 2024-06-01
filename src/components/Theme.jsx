import { Button,
  useColorMode,
  Box,
  useColorModeValue} from "@chakra-ui/react";
function Theme() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
      <Box 
      align = {'right'} 
      p={2}
      bg={useColorModeValue('gray.50', 'gray.800')}
      >
      <header >
        <Button onClick={toggleColorMode}>
         {colorMode === 'light' ? ' Dark Mode🌜' : 'Light Mode☀️'}
        </Button>
      </header>
     </Box>
    )
  }
  export default Theme;