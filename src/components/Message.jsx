import React from 'react';
import styled from 'styled-components';

const MessageWrapper = styled.div`
  font-size: 1.5em;
  text-align: center;
  padding: 0.5em;
`;

const Message = (props) => {
  return(
    <MessageWrapper>
      {
        props.message === null ? '' : props.message
          ? <p style={{color: 'limegreen'}}>User added!</p>
          : <p style={{color: 'red'}}>Error!This username already exists!</p>
      }
    </MessageWrapper>
  )
};

export default Message;
