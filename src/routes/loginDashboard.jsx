import { useState } from "react";
import "../assets/styles/loginDashboard.scss";

function LoginDashboard() {

    //Esta es la variable que va a manejar si se puede ver o no la contraseña
    const [seePassword,setSeePassword] = useState("password");

    //Esto maneja las variables del login y las guarda.
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");


    return(
        <div className="login_body">
            <div className="login_body__inner">
                
                <div className="login">
                    
                    <div className="login__header">

                        <h1>¡Bienvenido de nuevo!</h1>
                        <h2>Ingresa con el email y contraseña que se te dio.</h2>

                    </div>
                    
                    <div className="login__form">
                        <p className="login__form__tags">E-mail</p>
                        <input type="text" placeholder="Ej. Nombre@gmail.com" className="login__form__input" onChange={(e)=>setEmail(e.target.value)}/>

                        <p className="login__form__tags">Contraseña</p>
                        <input type={seePassword} placeholder="Ej. *****" className="login__form__input" onChange={(e)=>setPassword(e.target.value)}/>
                        <br />
                        
                        <div className="login__form__checkbox">
                            <input type="checkbox" id="seePassword" onChange={(e)=>{
                                if(e.target.checked){
                                    setSeePassword("text");
                                }else{
                                    setSeePassword("password");
                                }
                            }} />
                            <span className="login__form__checkbox__tag">¿Mostrar contraseña?</span>
                        </div>
                        
                        <div className="login__form__checkbox">
                            <input type="checkbox" />
                            <span className="login__form__checkbox__tag">¿Recordarme?</span>
                        </div>

                        <div className="login__form__button">
                            <button 
                                onClick={(e)=>{
                                    console.log("TEST THESE ARE THE  VALUES OF THE LOGIN")
                                    console.log(email);
                                    console.log(password);
                                }}
                            >Log In</button>
                        </div>
                    </div>

                    <div className="login__footer">
                    ¿Olvidaste alguna de tus credenciales?<br />
                    Llama de inmediato al tecnico encargado para solucionar el problema <br />
                    <br />
                    Correo: <br />
                    correodelencargado@hotmail.com
                    </div>

                </div>

            </div>
        </div>
    )
}

export default LoginDashboard;