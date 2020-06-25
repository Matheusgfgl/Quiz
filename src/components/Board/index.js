import React  from 'react';
import Header from '../Header'
import List from '../List'
import {QuizData} from '../../services/api'

 import { Container } from './styles';

class Board extends React.Component {

  state = {
    unserAnswer: null,
    currentQuestion: 0,
    options: []
  }
  getQuestions = () => {
    const {currentQuestion} = this.state
    
      this.setState(() => {
        return {
          questions: QuizData[currentQuestion].question,
          options: QuizData[currentQuestion].options,
          answers: QuizData[currentQuestion].answers
        } 
      
    })
    
  };
  componentDidMount(){
    this.getQuestions();
    console.log(this.state);
  }

 render(){
 const {questions, options, answers, currentQuestion} = this.state;
 console.log(questions, options, answers);
  return (
   
    <Container>
      <Header current = {currentQuestion} question={questions} />
      <List options = {options}/>
    </Container>
  );
}
}
export default Board;

