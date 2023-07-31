import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import PropTypes from 'prop-types';

function Private({ children }) {
  const { user } = useSelector((state) => state.user);

  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
}

Private.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Private;
