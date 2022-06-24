import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;

    const total = expenses.reduce((acumulador, valorAtual) => acumulador
    + Number(valorAtual.value) * valorAtual.exchangeRates[valorAtual.currency].ask, 0);

    return (
      <div>
        <header className="header">
          <h4 data-testid="email-field">{ email }</h4>
          <p data-testid="total-field">{(total).toFixed(2)}</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({ email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.string.isRequired,
};
