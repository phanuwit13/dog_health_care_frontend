import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import '../../styles/Step.css'
import '../../styles/Views/Home.scss'
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
  Image,
  Button
} from '@chakra-ui/react'
import Steps, { Step } from 'rc-steps'
// components
import Introduction from './Introduction'
import LoadingPage from '../../components/loadingPage'
import TermOfService from './TermOfService'
import Symptoms from './Symptoms'
import Results from './Results'

// Actions
import diseaseAction from '../../actions/Disease'
import xxuLanguage from '../../utils/Language'
import symptomAction from '../../actions/Symptom'
import predictDiseaseAction from '../../actions/PredictDisease'

function HomePage() {
  const dispatch = useDispatch()
  const { t } = useTranslation(['common'])
  //redux
  const getDisease = useSelector(state => state.getDisease)
  const getSymptom = useSelector(state => state.getSymptom)
  const getClassSymptom = useSelector(state => state.getClassSymptom)
  const predictDisease = useSelector(state => state.predictDisease)

  //state
  const [currentStep, setCurrentStep] = useState(0)
  const [disableStep2, setDisableStep2] = useState(true)
  const [symtomOfDisease, setSymtomOfDisease] = useState([])
  const [loading, setLoading] = useState(false)

  const handleResultDisease = () => {
    let newArray = getSymptom.lists.data.filter(item => {
      return (
        item.symptom_class_number ===
        getClassSymptom.lists.data[0].symptom_class_number
      )
    })
    let check = 0

    newArray.map(item => {
      symtomOfDisease.map(itemNew => {
        if (item.symptomNumber === itemNew) {
          check += 1
        }
      })
    })
    if (symtomOfDisease.length < 4) {
      Swal.fire('', 'Please select more than 3 symptoms.', 'warning')
      return
    }

    if (check === 0) {
      Swal.fire('', 'Please select age', 'warning')
      return
    } else {
      dispatch(predictDiseaseAction.PredictDisease(symtomOfDisease))
    }
  }

  useEffect(() => {
    const loadTodoLists = () => {
      dispatch(diseaseAction.GetDisease())
      dispatch(symptomAction.GetSymptom())
      dispatch(symptomAction.GetClassSymptom())
    }
    loadTodoLists()
  }, [dispatch])

  useEffect(() => {
    if (predictDisease.lists) {
      setLoading(false)
      setCurrentStep(currentStep + 1)
    }
  }, [predictDisease])

  return (
    <div>
      <Box className="box-home-body" alignItems="flex-start">
        <Box
          overflowX="auto"
          marginBottom="20px"
          className="step-mobile"
          w="100%"
        >
          <Steps labelPlacement="vertical" size="small" current={currentStep}>
            <Step title={t('common:step.introduction')} />
            <Step title={t('common:step.term of service')} />
            <Step title={t('common:step.symptoms')} />
            <Step title={t('common:step.results')} />
          </Steps>
        </Box>
        <Box className="step-pc" w="220px">
          <Steps current={currentStep} direction="vertical">
            <Step title={t('common:step.introduction')} />
            <Step title={t('common:step.term of service')} />
            <Step title={t('common:step.symptoms')} />
            <Step title={t('common:step.results')} />
          </Steps>
        </Box>
        <Box p={0} borderRadius="16px" minH="600px" w="100%" bgColor="#fff">
          {(() => {
            if (currentStep == 0) {
              return <Introduction />
            } else if (currentStep == 1) {
              return (
                <TermOfService
                  disableStep2={disableStep2}
                  setDisableStep2={setDisableStep2}
                />
              )
            } else if (currentStep == 2) {
              return (
                <Symptoms
                  symtomOfDisease={symtomOfDisease}
                  setSymtomOfDisease={setSymtomOfDisease}
                />
              )
            } else {
              return <Results />
            }
          })()}
          <Divider />
          <Flex w="100%" p={10}>
            <Button
              display={currentStep === 0 ? 'none' : 'block'}
              onClick={() => {
                setCurrentStep(currentStep - 1)
              }}
              justifySelf="flex-end"
              colorScheme="gray"
              textTransform="uppercase"
            >
              {t('common:button.back')}
            </Button>
            <Spacer />
            <Button
              onClick={() => {
                if (currentStep === 2) {
                  handleResultDisease()
                  setLoading(true)
                } else if (currentStep === 3) {
                  setCurrentStep(0)
                  setSymtomOfDisease([])
                  dispatch(predictDiseaseAction.ClearPredictDisease())
                } else {
                  setCurrentStep(currentStep + 1)
                }
              }}
              disabled={currentStep === 1 ? disableStep2 : false}
              justifySelf="flex-end"
              colorScheme="blue"
              textTransform="uppercase"
            >
              {currentStep === 3
                ? t('common:button.finish')
                : t('common:button.next')}
            </Button>
          </Flex>
        </Box>
      </Box>
      <LoadingPage loading={loading} />
    </div>
  )
}

export default HomePage
