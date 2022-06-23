import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getCurrences from '../actions';
import Header from '../componets/Header';
import Forms from '../componets/Forms';

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
    return (
      <div>
        <Header />
        <Forms />
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
  moedas: PropTypes.func.isRequired,
};
