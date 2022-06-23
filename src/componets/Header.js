import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <header className="header">
          <h4 data-testid="email-field">{ email }</h4>
          <p data-testid="total-field">{0}</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({ email: state.user.email });

export default connect(mapStateToProps)(Header);
Header.propTypes = {
  email: PropTypes.string.isRequired,
};
