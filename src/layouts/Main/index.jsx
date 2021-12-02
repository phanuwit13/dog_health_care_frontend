// Chakar ui
import {
  Box,
  Center,
  Heading,
  Flex,
  Spacer,
  Text,
  Divider,
  HStack
} from '@chakra-ui/react'

// Logo
import logo from '../../assets/Images/dog.png'
import xxuLanguage from '../../utils/Language'

const MainLayout = ({ children }) => {
  const handleChangeLanguage = lg => {
    xxuLanguage.SetCurrentLanguage(lg)
  }

  return (
    <Box>
      <Box
        display="flex"
        alignItems="center"
        backgroundColor="#1676D0"
        height="80px"
        className="box-content-padding"
      >
        <Flex w="100%">
          <Box display="flex" alignItems="center">
            <img width="60px" src={logo} />
            <Heading ml="10px" color="#fffFFF" fontSize="md">
              DOGS HEALTH CARE
            </Heading>
          </Box>
          <Spacer />
          <HStack>
            <Text
              onClick={() => {
                handleChangeLanguage('th')
              }}
              cursor="pointer"
              color="#fff"
            >
              TH
            </Text>
            <Divider h="20px" color="#fff" orientation="vertical" />
            <Text
              onClick={() => {
                handleChangeLanguage('en')
              }}
              cursor="pointer"
              color="#fff"
            >
              EN
            </Text>
          </HStack>
        </Flex>
      </Box>
      <Box
        minHeight="calc(100vh - 80px)"
        py="40px"
        className="box-content-padding"
      >
        {children}
      </Box>
      {/* Main Layout */}
    </Box>
  )
}

export default MainLayout
