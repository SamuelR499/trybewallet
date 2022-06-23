// Coloque aqui suas actions
export const ADD_EMAIL = 'ADD_EMAIL';

export const addEmail = (email) => ({
  type: ADD_EMAIL,
  email,
});

export const REQUEST_API = 'REQUEST_API';

export const addApi = (api) => ({
  type: REQUEST_API,
  api,
});

const getApi = async () => {
  const xablau = await fetch('https://economia.awesomeapi.com.br/json/all');
  const response = await xablau.json();
  delete response.USDT;
  return Object.keys(response);
};

const getCurrences = () => async (dispatch) => {
  const api = await getApi();
  dispatch(addApi(api));
};

export default getCurrences;
