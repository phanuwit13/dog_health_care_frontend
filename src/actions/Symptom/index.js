import {
  GET_SYMPTOM_CLEAR_DATA,
  GET_SYMPTOM_FAIL,
  GET_SYMPTOM_SUCCESS
} from '../../redux/Constants/Symptom/Get'

import {
  GET_SYMPTOM_OF_DISEASE_CLEAR_DATA,
  GET_SYMPTOM_OF_DISEASE_FAIL,
  GET_SYMPTOM_OF_DISEASE_SUCCESS
} from '../../redux/Constants/Symptom/GetSymtomOfDisease'

import {
  SET_SYMPTOM_OF_DISEASE_CLEAR_DATA,
  SET_SYMPTOM_OF_DISEASE_FAIL,
  SET_SYMPTOM_OF_DISEASE_SUCCESS
} from '../../redux/Constants/Symptom/SetSymtomOfDisease'

import {
  GET_CLASS_SYMPTOM_CLEAR_DATA,
  GET_CLASS_SYMPTOM_FAIL,
  GET_CLASS_SYMPTOM_SUCCESS
} from '../../redux/Constants/Symptom/GetClassSymptom'

// Service
import symptomService from '../../services/Symptom'

// Utils
import handleResponse from '../../utils/Response'

const symptomAction = {
  GetSymptom: () => async (dispatch, getState) => {
    const response = await symptomService.GetSymptom()
    if (response.status === 200) {
      handleResponse.Success({
        type: GET_SYMPTOM_SUCCESS,
        dispatch,
        payload: response
      })
    } else {
      handleResponse.Error({
        type: GET_SYMPTOM_FAIL,
        errorPage: true,
        dispatch,
        error: response.error
      })
    }
  },
  ClearGetSymptom: () => async dispatch => {
    // Clear data of example in Redux
    dispatch({
      type: GET_SYMPTOM_CLEAR_DATA
    })
  },
  GetSymptomOfDisease: diseaseNumber => async (dispatch, getState) => {
    dispatch({
      type: GET_SYMPTOM_OF_DISEASE_CLEAR_DATA
    })
    const response = await symptomService.GetSymptomOfDisease(diseaseNumber)
    if (response.status === 200) {
      handleResponse.Success({
        type: GET_SYMPTOM_OF_DISEASE_SUCCESS,
        dispatch,
        payload: response
      })
    } else {
      handleResponse.Error({
        type: GET_SYMPTOM_OF_DISEASE_FAIL,
        errorPage: true,
        dispatch,
        error: response.error
      })
    }
  },
  SetSymptomOfDisease: (symptomData,disease) => async (dispatch, getState) => {
    const response = await symptomService.SetSymptomOfDisease(symptomData,disease)
    if (response.status === 200) {
      handleResponse.Success({
        type: SET_SYMPTOM_OF_DISEASE_SUCCESS,
        dispatch,
        payload: response
      })
    } else {
      handleResponse.Error({
        type: SET_SYMPTOM_OF_DISEASE_FAIL,
        errorPage: true,
        dispatch,
        error: response.error
      })
    }
  },
  ClearSetSymptomOfDisease: () => async dispatch => {
    // Clear data of example in Redux
    dispatch({
      type: SET_SYMPTOM_OF_DISEASE_CLEAR_DATA
    })
  },
  GetClassSymptom: () => async (dispatch, getState) => {
    const response = await symptomService.GetClassSymptom()
    if (response.status === 200) {
      handleResponse.Success({
        type: GET_CLASS_SYMPTOM_SUCCESS,
        dispatch,
        payload: response
      })
    } else {
      handleResponse.Error({
        type: GET_CLASS_SYMPTOM_FAIL,
        errorPage: true,
        dispatch,
        error: response.error
      })
    }
  },
  ClearClassSymptom: () => async dispatch => {
    // Clear data of example in Redux
    dispatch({
      type: GET_CLASS_SYMPTOM_CLEAR_DATA
    })
  },
}

export default symptomAction
