import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionThunkWallet, creatActionEdit } from '../actions';

const INITITAL_STATE = {
  value: 0,
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
};
class Forms extends Component {
  state = {
    id: 0,
    ...INITITAL_STATE,
  }

  shouldComponentUpdate(nextProps) {
    const { editor, idToEdit, despesaToEdit } = nextProps;
    const { id } = this.state;
    console.log(editor, idToEdit, despesaToEdit);
    if (editor && idToEdit !== id) {
      this.setState(despesaToEdit);
    }
    return true;
  }

  handleOnChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleOnClick = () => {
    const { editor, editDespesa, thunkWallet } = this.props;
    if (editor) {
      editDespesa(this.state);
    } else {
      thunkWallet(this.state);
      this.setState((prevState) => ({ id: prevState.id + 1, ...INITITAL_STATE }));
    }
  }

  render() {
    const { moedas, editor } = this.props;
    const { value, description, method, tag, currency } = this.state;
    return (
      <form className="forms">
        <label htmlFor="value-input">
          VALOR:
          <input
            type="number"
            data-testid="value-input"
            id="value-input"
            name="value"
            value={ value }
            onChange={ this.handleOnChange }
          />
        </label>

        <label htmlFor="description-input">
          DESCRIPTION:
          <input
            data-testid="description-input"
            id="description-input"
            name="description"
            value={ description }
            onChange={ this.handleOnChange }
          />
        </label>

        <label htmlFor="moeda">
          MOEDA:
          <select
            id="moeda"
            name="currency"
            value={ currency }
            onChange={ this.handleOnChange }
          >
            {moedas && moedas.map((moeda, index) => (
              <option
                key={ index }
                value={ moeda }
              >
                {moeda}

              </option>
            ))}
          </select>
        </label>

        <label htmlFor="method">
          MÉTODO DE PAGAMENTO:
          <select
            data-testid="method-input"
            id="method"
            name="method"
            value={ method }
            onChange={ this.handleOnChange }
          >
            <option value="Dinheiro">
              Dinheiro
            </option>
            <option value="Cartão de crédito">
              Cartão de crédito
            </option>
            <option value="Cartão de débito">
              Cartão de débito
            </option>
          </select>
        </label>

        <label htmlFor="tag">
          TAG:
          <select
            data-testid="tag-input"
            id="tag"
            name="tag"
            value={ tag }
            onChange={ this.handleOnChange }
          >
            <option value="Alimentação">
              Alimentação
            </option>
            <option value="Lazer">
              Lazer
            </option>
            <option value="Trabalho">
              Trabalho
            </option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>

          </select>

        </label>

        {!editor ? (
          <button
            type="button"
            onClick={ this.handleOnClick }
          >
            Adicionar Despesa
          </button>
        ) : (
          <button
            type="button"
            onClick={ this.handleOnClick }
          >
            Editar despesa
          </button>)}

      </form>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  editDespesa: (despesa) => dispatch(creatActionEdit(despesa)),
  thunkWallet: (payload) => dispatch(actionThunkWallet(payload)),
});
const mapStateToProps = (state) => ({
  moedas: state.wallet.currencies,
  editor: state.wallet.editor,
  idToEdit: state.wallet.idToEdit,
  despesaToEdit: state.wallet.expenses.find(({ id }) => id === state.wallet.idToEdit),
});

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
Forms.propTypes = {
  moedas: PropTypes.arrayOf('string').isRequired,
  idToEdit: PropTypes.number.isRequired,
  editor: PropTypes.bool.isRequired,
  despesaToEdit: PropTypes.shape({}),
  editDespesa: PropTypes.func.isRequired,
  thunkWallet: PropTypes.func.isRequired,

};

Forms.defaultProps = {
  despesaToEdit: {},
};
