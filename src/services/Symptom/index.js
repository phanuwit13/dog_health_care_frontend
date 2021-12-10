import axios from 'axios'
import { servicePath } from '../../utils/config'

const symptomService = {
  GetSymptom: async () => {
    let response = null

    try {
      const responseData = await axios.get(
        `${servicePath.service.general}/api/get_symptom`
      )
      response = {
        status: responseData.status,
        lists: responseData.data
      }
    } catch (error) {
      const err = error.toJSON()
      if (err.message === 'Network Error') {
        response = {
          status: 500,
          error: err
        }
      } else {
        response = {
          status: error.response.status,
          error: error.response.data
        }
      }
    }
    return response
  },
  GetSymptomOfDisease: async diseaseNumber => {
    let response = null

    try {
      const responseData = await axios.get(
        `${servicePath.service.general}/api/get_symptom_of_disease?diseaseNumber=${diseaseNumber}`
      )
      response = {
        status: responseData.status,
        lists: responseData.data
      }
    } catch (error) {
      const err = error.toJSON()
      if (err.message === 'Network Error') {
        response = {
          status: 500,
          error: err
        }
      } else {
        response = {
          status: error.response.status,
          error: error.response.data
        }
      }
    }
    return response
  },
  SetSymptomOfDisease: async (symptomData, disease) => {
    let response = null

    try {
      const responseData = await axios.post(
        `${servicePath.service.general}/api/set_symptom_of_disease`,
        {
          symptomData,
          disease
        }
      )
      response = {
        status: responseData.status,
        lists: responseData.data
      }
    } catch (error) {
      const err = error.toJSON()
      if (err.message === 'Network Error') {
        response = {
          status: 500,
          error: err
        }
      } else {
        response = {
          status: error.response.status,
          error: error.response.data
        }
      }
    }
    return response
  },
  GetClassSymptom: async () => {
    let response = null

    try {
      const responseData = await axios.get(
        `${servicePath.service.general}/api/get_class_symptom`
      )
      response = {
        status: responseData.status,
        lists: responseData.data
      }
    } catch (error) {
      const err = error.toJSON()
      if (err.message === 'Network Error') {
        response = {
          status: 500,
          error: err
        }
      } else {
        response = {
          status: error.response.status,
          error: error.response.data
        }
      }
    }
    return response
  }
}

export default symptomService
