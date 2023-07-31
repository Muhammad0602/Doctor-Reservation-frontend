const localStorageMiddleware = () => (next) => (action) => {
  if (action.type === 'user/loginUser/fulfilled') {
    const { username } = action.payload.data;
    localStorage.setItem('username', username);
  }

  return next(action);
};

export default localStorageMiddleware;
