import React from 'react';
import styled from 'styled-components';

import Users from '../containers/Users/container';
import FormContainer from '../containers/FormContainer/container';

import '../styles/App.scss';

const Component = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const App = () => {
    return(
        <Component>
            <FormContainer/>
            <Users/>
        </Component>
    )
};

export default App;
