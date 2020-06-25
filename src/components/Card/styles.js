import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    
    justify-content: start;
    border: solid turquoise;
    background: white;
    cursor: grab;

    &:hover  {
    opacity: 0.6;
    }

    p{
      margin: 25px 20px;

    }

    button{
      height: 70px;
      width: 70px;
      background: turquoise;
      border: none;
      font-weight: 700;
      font-size: 20px;
    }

    button :hover{
      background: #FFF;
    }
`;
