// Constants
import {
  SET_SYMPTOM_OF_DISEASE_CLEAR_DATA,
  SET_SYMPTOM_OF_DISEASE_FAIL,
  SET_SYMPTOM_OF_DISEASE_SUCCESS
} from '../../../Constants/Symptom/SetSymtomOfDisease'

const setSymtomOfDisease = (state = {}, action) => {
  switch (action.type) {
    case SET_SYMPTOM_OF_DISEASE_SUCCESS:
      return {
        ...state,
        ...action.payload
      }
    case SET_SYMPTOM_OF_DISEASE_FAIL:
      return {
        ...state,
        ...action.payload
      }
    case SET_SYMPTOM_OF_DISEASE_CLEAR_DATA:
      return {}
    default:
      return state
  }
}

export default setSymtomOfDisease
