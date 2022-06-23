import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getCurrences from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { moedas } = this.props;
    moedas();
  }

  // desmontapropr = () => {
  //   const { moedas } = this.props;
  //   moedas();
  // }

  render() {
    const { email } = this.props;
    console.log(this.props);
    return (
      <div>
        <header>
          <p data-testid="email-field">{ email }</p>
          <p data-testid="total-field">{0}</p>
          <p data-testid="header-currency-field">BRL</p>

        </header>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  email: state.user.email,
  xablau: state.wallet });

const mapDispatchToProps = (dispatch) => ({
  moedas: () => dispatch(getCurrences()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  moedas: PropTypes.func.isRequired,
};
