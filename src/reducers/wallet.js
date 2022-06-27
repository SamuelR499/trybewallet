import { REQUEST_API,
  BUTTON_ADD, ON_DELETE,
  UPDATE_LIST, UPDATE_DESPESA } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: null,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
      currencies: action.api,

    };
  case BUTTON_ADD:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case ON_DELETE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.id),
    };
  case UPDATE_LIST:
    return {
      ...state,
      editor: true,
      idToEdit: action.id,
    };
  case UPDATE_DESPESA: {
    const indexDele = state.expenses.findIndex(({ id }) => id === action.despesa.id);
    const newExpenses = [...state.expenses];
    newExpenses[indexDele] = { ...state.expenses[indexDele],
      value: action.despesa.value,
      description: action.despesa.description,
      currency: action.despesa.currency,
      method: action.despesa.method,
      tag: action.despesa.tag,
    };
    return {
      ...state,
      expenses: newExpenses,
      editor: false,
      idToEdit: null,
    };
  }

  default:
    return state;
  }
};

export default wallet;
