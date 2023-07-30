import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import PropTypes from 'prop-types';

function Private({ children }) {
  const { isAuth } = useSelector((state) => state.user);

  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return children;
}

Private.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Private;
