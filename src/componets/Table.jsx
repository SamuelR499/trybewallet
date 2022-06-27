import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { buntonDel, creatActionEditList } from '../actions';

class Table extends Component {
  render() {
    const { expenses, deleteList, editList } = this.props;
    return (
      <table>
        <thead>
          <tr>

            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
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
                  data-testid="edit-btn"
                  onClick={
                    () => editList(expense.id)
                  }
                >
                  Editar
                </button>
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
  editList: (id) => dispatch(creatActionEditList(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

Table.propTypes = {
  expenses: PropTypes.arrayOf('string').isRequired,
  deleteList: PropTypes.func.isRequired,
  editList: PropTypes.func.isRequired,
};
