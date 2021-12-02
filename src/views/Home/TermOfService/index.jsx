import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import '../../../styles/Step.css'
import '../../../styles/Views/Home.scss'

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

function TermOfService() {
  const { t } = useTranslation(['common'])
  // const [currentStep, setCurrentStep] = useState(0)
  return (
    <>
      <Box p={10} minH="480px" className="box-home-body">
        TermOfService
      </Box>
    </>
  )
}

export default TermOfService
