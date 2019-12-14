import React from 'react';

import {getMode} from './actions'

import {connect} from 'react-redux'

//header footer
import Trivia from './components/Question'
import Result from './components/Result'

import './App.css';

function App(props) {

  const handleEasy =() => props.getMode('easy')
  const handleMedium =() => props.getMode('medium')
  const handleHard =() => props.getMode('hard')
  return (
    <div className="container">
      <h1>Test your Knowledge with these questions!</h1>
      <div className="m-3 d-flex justify-content-around">
        <span className="btn btn-success" onClick={handleEasy}>Easy</span>
        <span className="btn btn-warning" onClick={handleMedium}>Medium</span>
        <span className="btn btn-danger" onClick={handleHard}>Hard</span>
      </div>
      
      <Trivia props={props}/>
      <Result props={props}/>

    </div>
  );
}



const mapStateToProps = state => { 
  return{
  mode: state.mode,
  currentQuestion: state.currentQuestion,
  totalQuestions: state.totalQuestions,
  score: state.score,
  isCorrect: state.isCorrect,
  isAnswered: state.isAnswered,
  isFetching: state.isFetching,
  error: state.error,
}
}

export default connect(
  mapStateToProps, {getMode})(App);
