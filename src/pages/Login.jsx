import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../utils/http';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import emailIcon from '../assets/icons/email.svg';
import passwordIcon from '../assets/icons/password.svg';
import { useTranslation } from 'react-i18next';

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { t } = useTranslation();

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      navigate('/tests');
    }
  }, [navigate]);

  const onSubmit = async (e) => {
    e.preventDefault();
    login({
      email: email,
      password,
    })
      .then((response) => {
        Cookies.set('token', response.token);
        setEmail('');
        setPassword('');
        navigate('/tests');
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <form onSubmit={onSubmit} className="container__center">
      <div className="login">
        <div className="login__title">
          <h1>StudEase</h1>
        </div>
        <div className="login__fields">
          <div className="login__field">
            <div className="login__img">
              <img src={emailIcon} alt="Email" />
            </div>
            <input
              value={email}
              type="text"
              required
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              placeholder={t('login_page.email')}
              className="login__input"
            />
          </div>
          <div className="login__field">
            <div className="login__img">
              <img src={passwordIcon} alt="password" />
            </div>
            <input
              value={password}
              required
              type="password"
              onChange={(event) => setPassword(event.target.value)}
              placeholder={t('login_page.password')}
              className="login__input"
            />
          </div>
        </div>
        <button type="submit" className="login__button">
          {t('login_page.btnSubmit')}
        </button>
        <Link title="Register" to="/register" className="login__link">
          {t('login_page.registerLink')}
        </Link>
        {errorMessage && <div className="login__error">{errorMessage}</div>}
      </div>
    </form>
  );
}

export default Login;
