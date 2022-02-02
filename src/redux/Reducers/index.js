import { combineReducers } from 'redux'

import todo from './Todo'
import post from './Post'
import getDisease from './Disease'
import getSymptom from './Symptom/Get'
import getSymtomOfDisease from './Symptom/GetSymtomOfDisease'
import setSymtomOfDisease from './Symptom/SetSymtomOfDisease'
import getClassSymptom from './Symptom/GetClassSymptom'
import getFirstSymptom from './Symptom/GetFirstSymptom'
import predictDisease from './PredictDisease'
import getNextSymptom from './Symptom/GetNextSymptom'
import getPredictDisease from './GetPredictDisease'


export default combineReducers({
  post,
  todo,
  getDisease,
  getSymptom,
  getSymtomOfDisease,
  setSymtomOfDisease,
  getClassSymptom,
  predictDisease,
  getFirstSymptom,
  getNextSymptom,
  getPredictDisease
})
