import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
// Chakar ui
import {
  Box,
  Center,
  Heading,
  Flex,
  Spacer,
  Text,
  Divider,
  HStack,
  Badge,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
  Image,
  Modal,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure
} from '@chakra-ui/react'

//utile

import token from 'utils/token'

// Logo
import logo from '../../assets/Images/dog_4.png'
import xxuLanguage from '../../utils/Language'

import xxaProfile from '../../actions/Profile'

const MainLayout = ({ children }) => {
  const dispatch = useDispatch()
  const getProfile = useSelector(state => state.getProfile)

  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleChangeLanguage = lg => {
    xxuLanguage.SetCurrentLanguage(lg)
  }

  const handleLogout = () => {
    dispatch(xxaProfile.ClearGetProfile())
    window.localStorage.removeItem('userToken')
    window.location.href = '/login'
  }

  const handleHome = () => {
    window.location.href = '/'
  }

  useEffect(() => {
    let userToken = token.getToken()
    if (userToken) {
      dispatch(xxaProfile.GetProfile())
    }
  }, [])

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
            <Image role="button" onClick={handleHome} width="60px" src={logo} />
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
          <Center ml="10px">
            {getProfile.lists ? (
              <Menu>
                <MenuButton fontSize="0.8em" role="button" as={Badge}>
                  {getProfile.lists.data.firstName}
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={onOpen}>Profile</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <Link
                onClick={() => {
                  window.location.href = '/login'
                }}
                color="#ffffff"
              >
                Login
              </Link>
            )}
          </Center>
        </Flex>
      </Box>
      <Box
        minHeight="calc(100vh - 80px)"
        py="40px"
        className="box-content-padding"
      >
        {children}
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* Main Layout */}
    </Box>
  )
}

export default MainLayout
