import { combineReducers } from 'redux'

import todo from './Todo'
import post from './Post'
import getDisease from './Disease'
import getSymptom from './Symptom/Get'
import getSymtomOfDisease from './Symptom/GetSymtomOfDisease'
import setSymtomOfDisease from './Symptom/SetSymtomOfDisease'
import getClassSymptom from './Symptom/GetClassSymptom'
import predictDisease from './PredictDisease'

export default combineReducers({
  post,
  todo,
  getDisease,
  getSymptom,
  getSymtomOfDisease,
  setSymtomOfDisease,
  getClassSymptom,
  predictDisease
})
