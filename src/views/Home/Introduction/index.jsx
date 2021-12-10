import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'

import '../../../styles/Views/Home.scss'
import '../../../styles/Views/Home/Introduction.scss'

import doctor from '../../../assets/Images/dog_1.png';

// Chakar ui
import {
  Box,
  Center,
  Heading,
  Image
} from '@chakra-ui/react'

import _ from 'lodash'

// Actions
import diseaseAction from '../../../actions/Disease'
import xxuLanguage from '../../../utils/Language'
import symptomAction from '../../../actions/Symptom'

function Introduction() {
  const { t } = useTranslation(['common'])
  const getDisease = useSelector(state => state.getDisease)
  const getSymptom = useSelector(state => state.getSymptom)

  const lang = xxuLanguage.GetCurrentLanguage()

  // const [currentStep, setCurrentStep] = useState(0)
  return (
    <>
      <Box p={10} minH="480px" className="box-introduction">
        <Box w="80%" className="box-introduction-details" alignSelf="flex-end">
          <Heading fontSize="lg">Hello!</Heading> You’re about to use a short (3
          min), safe and anonymous health checkup. Your answers will be
          carefully analyzed and you’ll learn about possible causes of your
          symptoms.
        </Box>
        <Box>
          <Image loop="-1" width="400px" src={doctor} alt="" />
        </Box>
      </Box>
    </>
  )
}

export default Introduction
