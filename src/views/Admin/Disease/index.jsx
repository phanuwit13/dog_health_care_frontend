import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Modal,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Textarea
} from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'

import diseaseAction from 'actions/Disease'

function Disease() {
  const dispatch = useDispatch()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [diseaseEN, setDiseaseEN] = useState(null)
  const [diseaseTH, setDiseaseTH] = useState(null)
  const [symptomDetailEN, setSymptomDetailEN] = useState(null)
  const [symptomDetailTH, setSymptomDetailTH] = useState(null)
  const [treatmentGuidelinesEN, setTreatmentGuidelinesEN] = useState(null)
  const [treatmentGuidelinesTH, setTreatmentGuidelinesTH] = useState(null)

  const getDisease = useSelector(state => state.getDisease)

  const handleEdit = disease => {
    onOpen()
    setDiseaseEN(disease.diseaseEN)
    setDiseaseTH(disease.diseaseTH)
    setSymptomDetailEN(disease.symptomDetailEN)
    setSymptomDetailTH(disease.symptomDetailTH)
    setTreatmentGuidelinesEN(disease.treatmentGuidelinesEN)
    setTreatmentGuidelinesTH(disease.treatmentGuidelinesTH)
  }

  useEffect(() => {
    dispatch(diseaseAction.GetDisease())
  }, [dispatch])

  useEffect(() => {
    if (getDisease) {
      console.log('getDisease', getDisease)
    }
  }, [getDisease])

  return (
    <>
      <Table variant="simple">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th></Th>
            <Th>Disease english name</Th>
            <Th>Disease thai name</Th>
            <Th></Th>
            {/* <Th>Treatment guidelines english</Th>
            <Th>Treatment guidelines thai</Th>
            <Th>Symptom detail english</Th>
            <Th>Symptom detail thai</Th> */}
          </Tr>
        </Thead>
        <Tbody>
          {getDisease.lists?.data.map((item, index) => {
            return (
              <Tr>
                <Td>{index + 1}</Td>
                <Td>{item.diseaseEN}</Td>
                <Td>{item.diseaseTH}</Td>
                <Td>
                  <EditIcon
                    onClick={()=>{handleEdit(item)}}
                    role="button"
                    _hover={{ opacity: '0.6' }}
                  />
                </Td>
                {/* <Td>{item.symptomDetailEN}</Td>
                <Td>{item.symptomDetailTH}</Td>
                <Td>{item.treatmentGuidelinesEN}</Td>
                <Td>{item.treatmentGuidelinesTH}</Td> */}
              </Tr>
            )
          })}
        </Tbody>
        {/* <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot> */}
      </Table>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>EDIT DISEASE</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Disease english name</FormLabel>
              <Input value={diseaseEN} type="text" />
              <FormLabel mt="10px">Disease english thai</FormLabel>
              <Input value={diseaseTH} type="text" />
              <FormLabel mt="10px">Symptom detail english</FormLabel>
              <Textarea value={symptomDetailEN} type="text" />
              <FormLabel mt="10px">Symptom detail thai</FormLabel>
              <Textarea value={symptomDetailTH} type="text" />
              <FormLabel mt="10px">Treatment guidelines english</FormLabel>
              <Textarea value={treatmentGuidelinesEN} type="text" />
              <FormLabel mt="10px">Treatment guidelines thai</FormLabel>
              <Textarea value={treatmentGuidelinesTH} type="textarea" />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="gray" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="blue">Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Disease
