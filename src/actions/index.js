// Coloque aqui suas actions
export const ADD_EMAIL = 'ADD_EMAIL';
export const REQUEST_API = 'REQUEST_API';
export const BUTTON_ADD = 'BUTTON_ADD';
export const ON_DELETE = 'ON_DELETE';
export const UPDATE_LIST = 'UPDATE_LIST';
export const UPDATE_DESPESA = 'UPDATE_DESPESA';

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

export const buntonDel = (id) => ({
  type: ON_DELETE,
  id,
});

const getApi = async () => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  const dataSemUSDT = Object.keys(data).filter((moeda) => moeda !== 'USDT');
  return dataSemUSDT;
};

const getExchangeRates = async () => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  return data;
};

export const getCurrences = () => async (dispatch) => {
  const api = await getApi();
  dispatch(addApi(api));
};

export const actionThunkWallet = (payload) => async (dispatch) => {
  const objt = await getExchangeRates();
  const teste = {
    ...payload,
    exchangeRates: objt,
  };
  dispatch(butnAdd(teste));
};
export const creatActionEditList = (id) => ({
  type: UPDATE_LIST,
  id,
});

export const creatActionEdit = (despesa) => ({
  type: UPDATE_DESPESA,
  despesa,
});
