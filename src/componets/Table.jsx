import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { buntonDel } from '../actions';

class Table extends Component {
  render() {
    const { expenses, deleteList } = this.props;
    return (
      <table>
        <thead>
          <tr>

            <td>Descrição</td>
            <td>Tag</td>
            <td>Método de pagamento</td>
            <td>Valor</td>
            <td>Moeda</td>
            <td>Câmbio utilizado</td>
            <td>Valor convertido</td>
            <td>Moeda de conversão</td>
            <td>Editar/Excluir</td>
          </tr>
        </thead>
        <tbody>
          {expenses && expenses.map((expense) => (

            <tr key={ expense.value }>
              <td>
                {expense.description }
              </td>
              <td>
                { expense.tag}
              </td>
              <td>
                {expense.method}
              </td>
              <td>
                {Number(expense.value).toFixed(2)}
              </td>
              <td>
                {expense.exchangeRates[expense.currency].name.split('/')[0]}
              </td>
              <td>
                {(parseFloat(expense.exchangeRates[expense.currency].ask)).toFixed(2)}
              </td>
              <td>
                {(parseFloat(expense.value
                     * expense.exchangeRates[expense.currency].ask)).toFixed(2)}
              </td>
              <td>Real</td>
              <td>
                <button
                  type="submit"
                  data-testid="delete-btn"
                  onClick={
                    () => deleteList(expense.id)
                  }
                >
                  Excluir

                </button>
              </td>
            </tr>
          ))}

        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({ expenses: state.wallet.expenses });

const mapDispatchToProps = (dispatch) => ({
  deleteList: (id) => dispatch(buntonDel(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

Table.propTypes = {
  expenses: PropTypes.arrayOf('string').isRequired,
  deleteList: PropTypes.func.isRequired,

};
