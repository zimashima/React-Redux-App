import {GET_MODE_START,GET_MODE_SUCCESS,GET_MODE_FAIL, CHECK_ANSWER_START} from './../actions'

import {CHECK_ANSWER_SUCCESS, GET_NEXT_QUESTION_START, GET_NEXT_QUESTION_SUCCESS, GET_NEXT_QUESTION_FAIL} from './../actions'




export const initialState = {
    mode: null,
    currentQuestion: null,
    totalQuestions: 0,
    score: 0,
    isCorrect: null,
    isAnswered: null,
    isFetching:null,
    error: null,
}

export const triviaReducers = (state = initialState, action) => {
    switch(action.type){

        //GET_MODE

        case GET_MODE_START:
            return {
                ...state,
                isFetching: true,
                isCorrect: null,
                isAnswered: null
            }
        case GET_MODE_SUCCESS:
            return {
                ...state,
                mode: action.payload.difficulty,
                currentQuestion: action.payload,
                totalQuestions: state.totalQuestions + 1,
                score: 0,
                isFetching: false
            }

        case GET_MODE_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }

        //CHECK_ANSWER

        case CHECK_ANSWER_START:
            return{
                ...state,
                isAnswered: true
            }

        case CHECK_ANSWER_SUCCESS:
            return{
                    ...state,
                    isAnswered: true,
                    isCorrect: action.payload
            }
        
        case GET_NEXT_QUESTION_START:
            return {
                    ...state,
                    currentQuestion: null,
                    isFetching: true,
                    isCorrect: null,
                    isAnswered: null
            }

        case GET_NEXT_QUESTION_SUCCESS:
            return {
                    ...state,
                    currentQuestion: action.payload,
                    totalQuestions: state.totalQuestions + 1,
                    score: 0,
                    isFetching: false
            }
            
        case GET_NEXT_QUESTION_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
                    

        default:
            return state
    }
}