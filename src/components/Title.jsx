import React from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  padding: 1em;
`;

const Title = (props) => {
  return(
    <TitleWrapper>
      {props.title}
    </TitleWrapper>
  )
};

export default Title;
