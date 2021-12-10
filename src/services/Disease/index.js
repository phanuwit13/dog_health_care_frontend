import axios from 'axios'
import { servicePath } from '../../utils/config'

const diseaseService = {
  GetDisease: async () => {
    let response = null

    try {
      const responseData = await axios.get(
        `${servicePath.service.general}/api/get_disease`
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

export default diseaseService
