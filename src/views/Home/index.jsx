import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import '../../styles/Step.css'
import '../../styles/Views/Home.scss'

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
import TermOfService from './TermOfService'
import Symptoms from './Symptoms'
import Results from './Results'

function HomePage() {
  const { t } = useTranslation(['common'])
  const [currentStep, setCurrentStep] = useState(0)
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
              return <TermOfService />
            } else if (currentStep == 2) {
              return <Symptoms />
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
                setCurrentStep(currentStep + 1)
              }}
              justifySelf="flex-end"
              colorScheme="blue"
              textTransform="uppercase"
            >
              {t('common:button.next')}
            </Button>
          </Flex>
        </Box>
      </Box>
    </div>
  )
}

export default HomePage
