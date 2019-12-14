import React from 'react'
import { nextQuestion } from '../actions'
import {connect} from 'react-redux'

const Result = props => {

    const handleNext = e => {
        props.nextQuestion(props.props.mode)
    }

    return (
        <div>
            {!props.props.isAnswered && !props.props.isCorrect && <></>}
            {props.props.isAnswered && 
            <div>
                {
                    props.props.isCorrect? 
                    <h3 className="text-success text-center">Good Job!</h3> : <h3 className="text-danger text-center">Not so smart, aren't you? :P </h3>
                }
                <span class="btn btn-primary" onClick={handleNext}>Next Question</span>
            </div>
            }
        </div>
    )
}


export default connect(null, {nextQuestion})(Result);