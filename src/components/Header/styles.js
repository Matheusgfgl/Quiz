import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  width: 985px;
  height: 120px;

  justify-content: center;
  align-items: center;
  background: blue;
  text-align: center;

  h1{
    font-size: 26px;
    background: #FFF;
    padding: 10px;
    color: black
  }
  p{
    font-size: 20px;
    
  }
`;

export const Label = styled.div`
    width: 160px;
    font-size: 26px;
    background: #FFF;
    margin-top: 10px;
    padding: 5px;
    color: black;
    text-align: center;
`;
