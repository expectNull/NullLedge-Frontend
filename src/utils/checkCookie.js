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

export async function checkUser(post_id) {
  let info = {
    post_id: post_id,
  };

  let response = await (
    await axios.post(process.env.REACT_APP_API_URL + '/checkUser', info)
  ).data;

  return response._KEN;
}
