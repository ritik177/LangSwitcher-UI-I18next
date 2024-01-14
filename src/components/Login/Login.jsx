import React, { useState } from 'react';
import "./login.css";
import logoImage from '../../assets/header_logo.png';
import { useTranslation } from 'react-i18next';

const Login = () => {
    const {t}=useTranslation();
    const [username, setUsername] = useState('guest');

    return (
        <div className="container">
            <div className="login-page">
                <img src={logoImage} alt="Barracuda Logo" className="logo-image" />
                <div className="form">
                    <form className='login-form'>
                        <p>{t("enterCredentials")}</p>
                        <input
                            type="text"
                            value={username}
                            name="username"
                            id="username"
                            placeholder={t("username")}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder={t("password")}
                        />
                        <button className='btn'>
                        {t("signIn")}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;