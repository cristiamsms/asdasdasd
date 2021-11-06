import React from 'react';
import './login.css';
import logo from '../assets/logoCeibaSoftware-horizontal-blanco.png';
import logo2 from '../assets/TXT-ESPANOL.png';
export const LoginScreen = () => {





    
    return (
        <>

        <section className="login">
        <header className="header">
            <img className="header__img" src={logo} alt="prieba" />
        </header>
        <div className=" container ">   
            <div className="prueba">
                <img className="container__img" src={logo2} alt="" />
            </div>
            <div className="login__container">
                <div className="login__container--title">
                
                <h2> Iniciar Sesion</h2>

                </div>

                <form action="" className ="login__container--form">
                    <input className="input" type="text" placeholder="Correo" />
                    <input className="input" type="password"  placeholder="Contraseña"/>
                    <div>
                  
                    </div>
                    <input className="button" type="button"  value="iniciar sesion" />
                </form>

            </div>
        </div>
        </section>

        </>
      
    )
}
