import React, {Component} from 'react';
import styled from "styled-components";
import { Edit, Delete } from '@material-ui/icons';

const UserWrapper = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  font-size: 1em;
  text-align: left;
`;

const UserName = styled.h1`
  width: 150px;
  font-size: 1em;
  text-align: left;
`;

const Button = styled.div`
  width: 30px;
  font-size: 1em;
  text-align: left;
`;

class User extends Component {

  render() {
    const { user } = this.props;
    return (
      <UserWrapper>
        <UserName>
          {user.name}
        </UserName>
        <Button>
          <Edit/>
        </Button>
        <Button>
          <Delete/>
        </Button>
      </UserWrapper>

    )
  }
}

export default User;