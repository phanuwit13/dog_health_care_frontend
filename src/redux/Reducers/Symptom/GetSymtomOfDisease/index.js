// Constants
import {
  GET_SYMPTOM_OF_DISEASE_CLEAR_DATA,
  GET_SYMPTOM_OF_DISEASE_FAIL,
  GET_SYMPTOM_OF_DISEASE_SUCCESS
} from '../../../Constants/Symptom/GetSymtomOfDisease'

const getSymtomOfDisease = (state = {}, action) => {
  switch (action.type) {
    case GET_SYMPTOM_OF_DISEASE_SUCCESS:
      return {
        ...state,
        ...action.payload
      }
    case GET_SYMPTOM_OF_DISEASE_FAIL:
      return {
        ...state,
        ...action.payload
      }
    case GET_SYMPTOM_OF_DISEASE_CLEAR_DATA:
      return {}
    default:
      return state
  }
}

export default getSymtomOfDisease
