import React, {Component} from 'react';
import User from './User';
import styled from "styled-components";

const List = styled.li`
  list-style-type: none;
  padding-bottom: 5px; 
`;

class UserList extends Component {

  render() {
    const { users } = this.props;
    return (
      <div>
        {
          users.map((user, index) =>
          <List key={user._id}>
            <User user={user}/>
          </List>
          )
        }
      </div>
    )
  }
}

export default UserList;