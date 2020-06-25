import React, {Component} from 'react';
import Card from '../Card'
 import { Container } from './styles';

 export default class  List extends Component {
  render(){
    return (
      <Container>
         {this.props.options.map((option) => {
            return <Card option={option} key={option} />
          })}
  
      </Container>
    );
  }

}

