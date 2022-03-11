import axios from 'axios';

export async function checkCookie() {
  let response = await (
    await axios.post(
      process.env.REACT_APP_API_URL + '/checkCookie',
      {},
      { withCredentials: true },
    )
  ).data;
  return response._KEN;
}
