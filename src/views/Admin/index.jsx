import React from 'react'
import Disease from 'views/Admin/Disease'
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading
} from '@chakra-ui/react'

function AdminPage() {
  return (
    <>
      <Tabs align="center">
        <TabList>
          <Tab _focus={{ boxShadow: 'none' }}>
            <Heading fontSize="lg">Disease</Heading>
          </Tab>
          <Tab _focus={{ boxShadow: 'none' }}>
            <Heading fontSize="lg">Symptom</Heading>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel borderBottomRadius="30px" minH="500px" bg="#ffffff">
            <Disease />
          </TabPanel>
          <TabPanel borderBottomRadius="30px" minH="500px" bg="#ffffff">
            <p>Symptom!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}

export default AdminPage
