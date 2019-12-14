import React from 'react'
import { connect } from 'react-redux'
import { checkAnswer } from '../actions'

const Trivia = (props) => {
    console.log(props.props)
    const handleAnswer = value =>{
        if (value === props.props.currentQuestion.correct_answer){
            props.checkAnswer(true)
        }else{
            props.checkAnswer(false)
        }
    }

    return (
        <>
            {!props.props.currentQuestion && !props.props.isFetching && <h4 className="text-center">Select mode to start!</h4>}
            {props.props.isFetching && <>Loading...</>}
            {props.props.currentQuestion &&
            <>
            <h3 className="text-center">{props.props.currentQuestion.question}</h3>
            <span>Category: </span> <span className="badge badge-warning">{props.props.currentQuestion.category}</span>
            <div className="d-flex justify-center">
                <span class="btn btn-primary m-3" onClick={() => handleAnswer("True")}>True</span>
                <span class="btn btn-primary m-3" onClick={() => handleAnswer("False")}>False</span>
            </div>
            </>
            }
        </>
    )
}


export default connect(null, {checkAnswer})(Trivia);

