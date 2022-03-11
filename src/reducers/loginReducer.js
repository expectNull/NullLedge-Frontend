const initialState = {
  token: undefined,
};

export function loginReducer(state, action) {
  switch (action.type) {
    case 'SET_LOGIN_VALUE':
      return { ...state, token: action.payload };

    case 'POLL_LOGIN_VALUE':
    default:
      return { token: undefined };
  }
}
