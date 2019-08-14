import {fetchData} from "../../store/actions/users.actions";
import {connect} from 'react-redux';
import Users from '.'

const mapStateToProps = (state) => {
  return {
    name: state.users.name
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (name) => {
      dispatch(fetchData(name))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
