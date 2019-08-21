import React, {Component} from 'react';
import styled from 'styled-components';

import Users from '../containers/Users/container';
import FormContainer from '../containers/FormContainer/container';

import '../styles/App.scss';

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

class App extends Component {
    render() {
        return(
            <Wrapper>
                <FormContainer/>
                <Users/>
            </Wrapper>
        )
    }
}

export default App;
