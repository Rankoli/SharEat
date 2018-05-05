

export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      console.log(state,action)
      return {
        Email: action.Email,
        Password: action.Password,
        ID: action.ID
      };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};
