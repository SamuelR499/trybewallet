import { REQUEST_API, BUTTON_ADD, ON_DELETE } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
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
    console.log('gooool');
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.id),
    };

  default:
    return state;
  }
};

export default wallet;
