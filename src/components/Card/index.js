import React, {Component} from 'react';

import { Container } from './styles';

export default class Card extends Component {
  render(){
    return (
      <Container>
        <button>A</button>
        
    <p>{this.props.option}</p>
       
        
      </Container>
      
    );
  }
 
}

