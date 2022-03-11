export function setLogin(value) {
  return {
    type: 'SET_LOGIN_VALUE',
    payload: value,
  };
}

export function pollLogin() {
  return {
    type: 'POLL_LOGIN_VALUE',
    payload: undefined,
  };
}
