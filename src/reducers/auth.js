

export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        Email: action.Email,
        Password: action.Password,
        ID: action.ID
      };
    case 'LOGOUT':
      return {};

    case 'ERROR':
      return {
        msg:action.msg
      };
    default:
      return state;
  }
};
