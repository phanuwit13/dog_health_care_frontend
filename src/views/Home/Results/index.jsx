import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
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
  Image,
  Button
} from '@chakra-ui/react'

import doctor from '../../../assets/Images/dog_1.png'

function Results() {
  const { t } = useTranslation(['common'])
  // const [currentStep, setCurrentStep] = useState(0)
  return (
    <>
      <Box minH="480px" p={10}>Results</Box>
    </>
  )
}

export default Results
