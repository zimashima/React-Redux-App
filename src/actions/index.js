import axios from 'axios';
import {connect} from 'react-redux'


export const GET_MODE_START = "GET_MODE_START"
export const GET_MODE_SUCCESS = "GET_MODE_SUCCESS"
export const GET_MODE_FAIL = "GET_MODE_FAILURE"


export const CHECK_ANSWER_START = 'CHEK_ANSWER_START'
export const CHECK_ANSWER_SUCCESS = 'CHECK_ANSWER_SUCCESS'
export const CHECK_ANSWER_FAIL = 'CHECK_ANSWER_FAIL'


export const GET_NEXT_QUESTION_START = 'GET_NEXT_QUESTION_START'
export const GET_NEXT_QUESTION_SUCCESS = 'GET_NEXT_QUESTION_SUCCESS'
export const GET_NEXT_QUESTION_FAIL = 'GET_NEXT_QUESTION_FAIL'



export const getMode = (mode) => dispatch => {
    dispatch({type: GET_MODE_START})
    axios.get(`https://opentdb.com/api.php?amount=1&difficulty=${mode}&type=boolean`)
    .then( response => {
        dispatch({type: GET_MODE_SUCCESS, payload: response.data.results[0]})
    })
    .catch(err => {
        dispatch({type: GET_MODE_FAIL, payload: err})
    })
}

export const checkAnswer = (result) => dispatch => {
    dispatch({type: CHECK_ANSWER_START})
    dispatch({type: CHECK_ANSWER_SUCCESS, payload: result})
}

export const nextQuestion = (value) => dispatch => {
    dispatch({type: GET_NEXT_QUESTION_START})
    axios.get(`https://opentdb.com/api.php?amount=1&difficulty=${value}&type=boolean`)
    .then( response => 
        dispatch({type: GET_NEXT_QUESTION_SUCCESS, payload: response.data.results[0]}))
    .catch(err => {
        dispatch({type: GET_MODE_FAIL, payload: err})
    })
}


