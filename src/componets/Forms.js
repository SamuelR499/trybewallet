import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { thunkWallet } from '../actions';

class Forms extends Component {
  state = {
    id: 0,
    value: 0,
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  }

  handleOnChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleOnClick = () => {
    const { dispatch } = this.props;
    dispatch(thunkWallet(this.state));

    this.setState((prevState) => ({ id: prevState.id + 1 }));
  }

  render() {
    const { moedas } = this.props;
    const { value, description, method, tag, currency } = this.state;
    return (
      <form className="forms">
        <label htmlFor="value-input">
          VALOR:
          <input
            data-testid="value-input"
            id="value-input"
            name="valor"
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
            name="coin"
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

        <button
          type="button"
          onClick={ this.handleOnClick }
        >
          Adicionar despesa

        </button>

      </form>
    );
  }
}

const mapStateToProps = (state) => ({ moedas: state.wallet.currencies });

export default connect(mapStateToProps)(Forms);
Forms.propTypes = {
  moedas: PropTypes.arrayOf('string').isRequired,
  dispatch: PropTypes.func.isRequired,
};
