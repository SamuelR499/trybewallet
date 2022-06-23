import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Forms extends Component {
  state = {
    valor: 0,
    description: '',
    // method: 'Dinheiro',
    // tag: 'Alimentação',

  }

  handleOnChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { moedas } = this.props;
    const { valor, description } = this.state;
    return (
      <form className="forms">
        <label htmlFor="value-input">
          VALOR:
          <input
            data-testid="value-input"
            id="value-input"
            name="valor"
            value={ valor }
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
            name="currencies"
          >
            {moedas.map((moeda, index) => (
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

          <button type="button">Adicionar despesa</button>

        </label>

        <label htmlFor="tag">
          TAG:
          <select
            data-testid="tag-input"
            id="tag"
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
      </form>
    );
  }
}

const mapStateToProps = (state) => ({ moedas: state.wallet.currencies });

export default connect(mapStateToProps)(Forms);
Forms.propTypes = {
  moedas: PropTypes.arrayOf('string').isRequired,
};
