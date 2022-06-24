// Coloque aqui suas actions
export const ADD_EMAIL = 'ADD_EMAIL';
export const REQUEST_API = 'REQUEST_API';
export const BUTTON_ADD = 'BUTTON_ADD';
export const TESTE = 'TESTE';

export const addEmail = (email) => ({
  type: ADD_EMAIL,
  email,
});

export const addApi = (api) => ({
  type: REQUEST_API,
  api,
});

export const butnAdd = (payload) => ({
  type: BUTTON_ADD,
  payload,
});

const getApi = async () => {
  const xablau = await fetch('https://economia.awesomeapi.com.br/json/all');
  const response = await xablau.json();
  const responseSemUSDT = Object.keys(response).filter((moeda) => moeda !== 'USDT');
  return responseSemUSDT;
};

const getExchangeRates = async () => {
  const xablau = await fetch('https://economia.awesomeapi.com.br/json/all');
  const response = await xablau.json();
  return response;
};

export const getCurrences = () => async (dispatch) => {
  const api = await getApi();
  dispatch(addApi(api));
};

export const thunkWallet = (payload) => async (dispatch) => {
  const objt = await getExchangeRates();
  const teste = {
    ...payload,
    exchangeRates: objt,
  };
  dispatch(butnAdd(teste));
};
