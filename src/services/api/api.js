import axios from 'axios';

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://gratibox-b.herokuapp.com'
      : 'http://localhost:4000',
});

function getConfig(token) {
  return {
    headers: {
      'x-access-token': token,
    },
  };
}

export function postSignIn(email, password) {
  return api.post('/auth/sign-in', {
    email,
    password,
  });
}

export function postSignUp(inputFields) {
  return api.post('/auth/sign-up', {
    name: inputFields.name,
    email: inputFields.email,
    password: inputFields.password
  });
}
