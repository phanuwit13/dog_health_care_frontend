import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

// Chakar ui
import { Box, Spinner } from '@chakra-ui/react'

function LoadingPage({ loading }) {
  const { t } = useTranslation(['common'])

  document.body.style.overflow = loading ? 'hidden' : 'unset'

  // const [currentStep, setCurrentStep] = useState(0)
  return loading ? (
    <>
      <Box
        h="100vh"
        bgColor="#19191926"
        borderRadius="0 0 10px 10px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        top="0"
        left="0"
        position="fixed"
        w="100%"
      >
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Box>
    </>
  ) : null
}

export default LoadingPage
