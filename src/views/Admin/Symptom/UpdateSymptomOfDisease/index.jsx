import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import '../../../styles/Step.css'
import '../../../styles/Views/Home.scss'
import '../../../styles/Views/Home/Introduction.scss'
import Swal from 'sweetalert2'

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
  WrapItem
} from '@chakra-ui/react'

import _ from 'lodash'

// Actions
import diseaseAction from '../../../actions/Disease'
import xxuLanguage from '../../../utils/Language'
import symptomAction from '../../../actions/Symptom'

var disease = ''

function Introduction() {
  const dispatch = useDispatch()
  const { t } = useTranslation(['common'])
  const getDisease = useSelector(state => state.getDisease)
  const getSymptom = useSelector(state => state.getSymptom)
  const getSymtomOfDiseaseRedux = useSelector(state => state.getSymtomOfDisease)
  const setSymtomOfDiseaseRedux = useSelector(state => state.setSymtomOfDisease)

  const [symtomOfDisease, setSymtomOfDisease] = useState([])

  const lang = xxuLanguage.GetCurrentLanguage()
  const getSymptomOfDisease = diseaseNumber => {
    disease = diseaseNumber
    dispatch(symptomAction.GetSymptomOfDisease(diseaseNumber))
  }

  const setSymptomOfDisease = () => {
    // console.log(symtomOfDisease,disease)
    dispatch(symptomAction.SetSymptomOfDisease(symtomOfDisease, disease))
  }

  const handleSetSymtomOfDisease = symptomNumber => {
    let data = []
    symtomOfDisease.map(item => {
      data.push(item)
    })

    const found = data.find(element => element === symptomNumber)
    if (found === undefined) {
      data.push(symptomNumber)
      setSymtomOfDisease(data)
    } else {
      let newData = data.filter(item => {
        return item !== symptomNumber
      })
      setSymtomOfDisease(newData)
    }
    // console.log('found', found)
  }

  useEffect(() => {
    const loadTodoLists = () => {
      dispatch(diseaseAction.GetDisease())
      dispatch(symptomAction.GetSymptom())
    }
    loadTodoLists()
  }, [dispatch])

  useEffect(() => {
    // console.log('setSymptomOfDisease', getSymtomOfDiseaseRedux)
    if (getSymtomOfDiseaseRedux.lists) {
      let data = []
      getSymtomOfDiseaseRedux.lists.data.map(item => {
        data.push(item.symptomNumber)
      })
      setSymtomOfDisease(data)
    }
  }, [getSymtomOfDiseaseRedux])

  useEffect(() => {
    if (setSymtomOfDiseaseRedux.lists) {
      if (setSymtomOfDiseaseRedux.lists.success) {
        Swal.fire(
          '',
          'Success',
          'success'
        )
        dispatch(symptomAction.ClearSetSymptomOfDisease())
      }
    }
  }, [setSymtomOfDiseaseRedux])

  useEffect(() => {
    if (symtomOfDisease) {
      console.log('symtomOfDisease', symtomOfDisease)
    }
  }, [symtomOfDisease])

  // const [currentStep, setCurrentStep] = useState(0)
  return (
    <>
      {/* <Box p={10} minH="480px" className="box-introduction">
        <Box w="80%" className="box-introduction-details" alignSelf="flex-end">
          <Heading fontSize="lg">Hello!</Heading> You’re about to use a short (3
          min), safe and anonymous health checkup. Your answers will be
          carefully analyzed and you’ll learn about possible causes of your
          symptoms.
        </Box>
        <Box>
          <Image loop="-1" width="400px" src={doctor} alt="" />
        </Box>
      </Box> */}
      <Box p={10} minH="480px">
        <Select
          onChange={e => {
            getSymptomOfDisease(e.target.value)
          }}
          placeholder="Select option"
        >
          {getDisease.lists
            ? getDisease.lists.data.map(item => {
                return (
                  <option
                    key={`diseaseNumber-${item.diseaseNumber}`}
                    value={item.diseaseNumber}
                  >
                    {lang === 'en' ? item.diseaseEN : item.diseaseTH}
                  </option>
                )
              })
            : null}
          {/* <option value="option2">Option 2</option>
          <option value="option3">Option 3</option> */}
        </Select>
        <Box mt="40px">
          <CheckboxGroup colorScheme="green" value={symtomOfDisease}>
            <Wrap spacing="10px">
              {getSymptom.lists
                ? getSymptom.lists.data.map(item => {
                    return (
                      <WrapItem key={`diseaseNumber-${item.symptomKey}`}>
                        <Checkbox
                          onChange={e => {
                            // console.log('123213', e.target.value)
                            handleSetSymtomOfDisease(e.target.value)
                          }}
                          value={item.symptomNumber}
                        >
                          {lang === 'en'
                            ? item.symptomNameEN
                            : item.symptomNameTH}
                        </Checkbox>
                      </WrapItem>
                    )
                  })
                : null}
            </Wrap>
          </CheckboxGroup>
          <Box mt="20px">
            <Button
              onClick={() => {
                setSymptomOfDisease()
              }}
              colorScheme="green"
            >
              Save
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Introduction
