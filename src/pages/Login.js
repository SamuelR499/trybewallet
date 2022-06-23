import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEmail } from '../actions/index';

class Login extends React.Component {
   state = {
     email: '',
     senha: '',
     buttonDisable: true,
   };

   // https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail me ajudou a interpretar regex e validar email
   handleOnChange = (event) => {
     const { name, value } = event.target;
     const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
     this.setState({ [name]: value });

     this.setState(({ senha, email }) => {
       const minLength = 6;
       if (regex.test(email) && senha.length >= minLength) {
         return this.setState({ buttonDisable: false });
       }
       return this.setState({ buttonDisable: true });
     });
   };

onbuttonClick = async () => {
  const { history, dispatch } = this.props;
  const { email } = this.state;
  dispatch(addEmail(email));
  history.push('/carteira');
}

render() {
  const { email, senha, buttonDisable } = this.state;
  return (
    <div className="login">
      <label htmlFor="email">
        e-mail
        <input
          className="inputs"
          type="email"
          name="email"
          data-testid="email-input"
          id="email"
          value={ email }
          onChange={ this.handleOnChange }
        />
      </label>
      <label htmlFor="senha">
        senha
        <input
          className="inputs"
          type="password"
          data-testid="password-input"
          name="senha"
          id="senha"
          value={ senha }
          onChange={ this.handleOnChange }
          minLength="6"
        />
      </label>
      <button
        type="button"
        disabled={ buttonDisable }
        onClick={ this.onbuttonClick }
      >
        Entrar
      </button>
    </div>
  );
}
}
export default connect()(Login);
Login.propTypes = {
  history: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};
