import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import '../../../styles/Step.css'
import '../../../styles/Views/Home.scss'
import '../../../styles/Views/Home/Introduction.scss'

import { PlusCircle } from 'react-feather'

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

import xxuLanguage from '../../../utils/Language'

import dogResult from '../../../assets/Images/dog_result.png'

function Results() {
  const { t } = useTranslation(['common'])

  const predictDisease = useSelector(state => state.predictDisease)

  const lang = xxuLanguage.GetCurrentLanguage()

  // const [currentStep, setCurrentStep] = useState(0)
  return (
    <>
      <Box
        h="40px"
        bgColor="#1676D0"
        borderRadius="0 0 10px 10px"
        display="flex"
        alignItems="center"
      >
        <Box ml="10px">
          <PlusCircle color="#ffffff" />
        </Box>
      </Box>
      <Box minH="480px" p={10} pt="10px" position="relative">
        <Box>
          <Heading fontSize="lg">Result</Heading>
          <Box mt="20px">
            <Heading fontSize="md">คาดว่าจะเป็นโรค</Heading>
            <Text ml="10px" mt="10px">
              {lang === 'en'
                ? predictDisease.lists?.data.diseaseEN
                : predictDisease.lists?.data.diseaseTH}
            </Text>
          </Box>
          <Box mt="20px">
            <Heading fontSize="md">อาการของโรค</Heading>
            <Text ml="10px" mt="10px">
              {lang === 'en'
                ? predictDisease.lists?.data.symptomDetailEN
                : predictDisease.lists?.data.symptomDetailTH}
            </Text>
          </Box>
          <Box mt="20px">
            <Heading fontSize="md">คำแนะนำ</Heading>
            <Text ml="10px" mt="10px">
              {lang === 'en'
                ? predictDisease.lists?.data.treatmentGuidelinesEN
                : predictDisease.lists?.data.treatmentGuidelinesTH}
            </Text>
          </Box>
        </Box>
        <Box pr="10" position="absolute" bottom="0">
          <Image src={dogResult} />
        </Box>
      </Box>
    </>
  )
}

export default Results
