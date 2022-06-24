import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends Component {
  render() {
    const { expenses } = this.props;
    console.log(expenses[0]);
    return (
      <table>
        <thead>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
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
            </tr>
          ))}

        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({ expenses: state.wallet.expenses });

export default connect(mapStateToProps)(Table);

Table.propTypes = {
  expenses: PropTypes.arrayOf('string').isRequired,
};
