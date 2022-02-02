import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { CheckCircleIcon, WarningIcon } from '@chakra-ui/icons'

import '../../../styles/Step.css'
import '../../../styles/Views/Home.scss'
import '../../../styles/Views/Home/Introduction.scss'

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
  Button,
  Select,
  CheckboxGroup,
  Checkbox,
  Wrap,
  WrapItem,
  Stack,
  Badge,
  VStack,
  Spinner,
  List,
  ListIcon,
  ListItem
} from '@chakra-ui/react'

// Actions
import diseaseAction from '../../../actions/Disease'
import xxuLanguage from '../../../utils/Language'
import symptomAction from '../../../actions/Symptom'

const Symptoms = ({ success, setSuccess, setDisease }) => {
  const dispatch = useDispatch()
  const { t } = useTranslation(['common'])

  const [listSymptom, setListSymptom] = useState([])
  const [question, setQuestion] = useState(null)
  const [loading, setLoading] = useState(false)

  const getFirstSymptom = useSelector(state => state.getFirstSymptom)
  const getNextSymptom = useSelector(state => state.getNextSymptom)

  // const [currentStep, setCurrentStep] = useState(0)

  const lang = xxuLanguage.GetCurrentLanguage()

  const handleAddSymtom = (symptom, status) => {
    setLoading(true)
    let data = [...listSymptom]
    let value = { symptomNameTH: symptom.symptomNameTH, status: status }
    data.push(value)
    setListSymptom(data)
    dispatch(
      symptomAction.GetNextSymptom(symptom.predict_disease_number, status)
    )
  }

  const componentRender = () => {
    if (loading) {
      return null
    } else if (success === false) {
      return (
        <>
          <Badge
            w="200px"
            borderRadius="8px"
            textAlign="center"
            variant="solid"
            padding="8px 20px"
            fontSize="lg"
            colorScheme="blue"
          >
            {question ? question.symptomNameTH : null}
          </Badge>
          <Flex gridGap="20px">
            <Button
              onClick={() => handleAddSymtom(question, false)}
              w="60px"
              size="sm"
            >
              NO
            </Button>
            <Button
              onClick={() => handleAddSymtom(question, true)}
              w="60px"
              size="sm"
              colorScheme="green"
            >
              YES
            </Button>
          </Flex>
        </>
      )
    } else {
      return (
        <>
          <>
            <Badge
              w="200px"
              borderRadius="8px"
              textAlign="center"
              variant="solid"
              padding="8px 20px"
              fontSize="lg"
              colorScheme="green"
            >
              Success
            </Badge>
            <Text>
              Prediction finished Please click on the{' '}
              <span style={{ color: '#1676D0', fontWeight: '600' }}>Next</span>{' '}
              button to see the results.
            </Text>
          </>
        </>
      )
    }
  }

  useEffect(() => {
    if (listSymptom) {
      console.log('listSymptom', listSymptom)
    }
  }, [listSymptom])

  useEffect(() => {
    if (getFirstSymptom.lists) {
      setQuestion(getFirstSymptom.lists.data[0])
    }
  }, [getFirstSymptom])

  useEffect(() => {
    setLoading(false)
    if (getNextSymptom.lists) {
      if (getNextSymptom.lists.data[0].predict_disease_result) {
        setSuccess(true)
        setDisease(getNextSymptom.lists.data[0].predict_disease_result)
      } else {
        setQuestion(getNextSymptom.lists.data[0])
      }
    }
  }, [getNextSymptom])

  return (
    <>
      <Box minH="480px" p={10}>
        <Heading fontSize="lg">
          Please answer, according to your dog's condition
        </Heading>
        <Center mt="40px">
          <VStack gridGap="30px">
            <Box display={loading ? 'block' : 'none'} height="113px">
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
            </Box>
            {componentRender}
          </VStack>
        </Center>
        <Box mt="40px">
          <Heading size="sm">Your dog has the following symptoms</Heading>
          <Box marginTop="10px">
            <List spacing={3}>
              {listSymptom
                ? listSymptom.map((item, index) => {
                    // return
                    return (
                      <ListItem key={`name-${index}`}>
                        <ListIcon
                          as={item.status ? CheckCircleIcon : WarningIcon}
                          color={item.status ? 'green.400' : 'yellow.400'}
                        />
                        {item.symptomNameTH}
                      </ListItem>
                    )
                  })
                : null}
            </List>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Symptoms
