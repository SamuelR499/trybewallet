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
  const responseSemUSDT = Object.keys(response).filter((moeda) => moeda !== 'USDT');
  return responseSemUSDT;
};

const getCurrences = () => async (dispatch) => {
  const api = await getApi();
  dispatch(addApi(api));
};

export const BUTTON_ADD = 'BUTTON_ADD';

export const butnAdd = (state) => ({
  type: BUTTON_ADD,
  state,
});

export default getCurrences;
