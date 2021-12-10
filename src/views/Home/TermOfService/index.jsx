import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import '../../../styles/Views/Home.scss'
import '../../../styles/Views/Home/termOfService.scss'

import term from '../../../assets/Images/term.svg'

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
  Image,
  Button,
  UnorderedList,
  ListItem,
  Stack,
  Checkbox
} from '@chakra-ui/react'

function TermOfService({ disableStep2, setDisableStep2 }) {
  const { t } = useTranslation(['common'])

  const [checkbox1, setCheckbox1] = useState(false)
  const [checkbox2, setCheckbox2] = useState(false)

  useEffect(() => {
    if (checkbox1 && checkbox2) {
      setDisableStep2(false)
      console.log('true')
    } else {
      setDisableStep2(true)
    }
  }, [checkbox1, checkbox2])

  return (
    <>
      <Box p={10} minH="480px" className="box-term">
        <Box w="80%" className="box-term-details">
          <Heading fontSize="lg">Term of service!</Heading>
          <Box mt="30px">
            <Text>
              Before using the checkup, please read Terms of Service. Remember
              that:
            </Text>
          </Box>
          <Box mt="20px">
            <UnorderedList>
              <ListItem>
                <Heading fontSize="md">Checkup is not a diagnosis.</Heading>
                Checkup is for informational purposes and is not a qualified
                medical opinion.
              </ListItem>
              <ListItem>
                <Heading fontSize="md">Do not use in emergencies.</Heading>In
                case of health emergency, call your local emergency number
                immediately.
              </ListItem>
              <ListItem>
                {' '}
                <Heading fontSize="md">Your data is safe.</Heading>
                Information that you provide is anonymous and not shared with
                anyone.
              </ListItem>
            </UnorderedList>
          </Box>
          <Box pl="20px" mt="20px">
            <Stack spacing="15px">
              <Checkbox
                onChange={e => {
                  setCheckbox1(e.target.checked)
                }}
                spacing="15px"
                colorScheme="teal"
              >
                I read and accept Terms of Service and Privacy Policy.
              </Checkbox>
              <Checkbox
                onChange={e => {
                  setCheckbox2(e.target.checked)
                }}
                spacing="15px"
                colorScheme="teal"
              >
                I agree to the processing of my health information for the
                purpose of performing the interview.
              </Checkbox>
            </Stack>
          </Box>
        </Box>
        <Box>
          <Image loop="-1" width="400px" src={term} alt="" />
        </Box>
      </Box>
    </>
  )
}

export default TermOfService
