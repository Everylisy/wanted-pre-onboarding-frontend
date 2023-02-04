import axios from 'axios';

const SERVER_URL = 'https://pre-onboarding-selection-task.shop/';
async function get(endpoint, params = '') {
  return axios.get(SERVER_URL + endpoint + params, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('userToken')}`,
    },
  });
}

async function post(endpoint, data) {
  const bodyData = JSON.stringify(data);
  return axios.post(SERVER_URL + endpoint, bodyData, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('userToken')}`,
    },
  });
}

async function put(endpoint, data) {
  const bodyData = JSON.stringify(data);
  return axios.put(SERVER_URL + endpoint, bodyData, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('userToken')}`,
    },
  });
}

async function del(endpoint, params = '') {
  return axios.delete(SERVER_URL + endpoint + params, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('userToken')}`,
    },
  });
}

export { get, post, put, del };
