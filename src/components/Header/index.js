import React, {Component} from 'react';

 import { Container, Label } from './styles';

 export default class Header extends Component {

  render(){
    return (
      <Container>
        <Label>Question {this.props.current + 1}</Label>
        <p>{this.props.question}</p>
      </Container>
  
 
  );
  }
}

