import User from '../source/1.png'
import {useState} from 'react';

const Login = () => {

const [Users, guardarUser] = useState({
    user:'',
    password:''
});
    const{user, password} = Users;
    const actualizarEstado = e =>{
        guardarUser({
            ...Users,
            [e.target.name] : e.target.value
        })
    }
  
    const [error, guardarError] = useState(false);
    const Sign = e =>{
        e.preventDefault();
        if(user.trim() === '' || password.trim() === ''){
            guardarError(true);
            return;
        }
        guardarError(false);

    }

    return ( 
        <>
        {// si esta vacio, mostrara un alert de error
            error ? <p className=" alert alert-danger text-center"> Los campos son obligatorios </p>: null

          }
            <div className="container mt-2 px-6">
                <div className="container mt-6 " >
                    <div className=" is-hidden-mobile is-hidden-tablet">
                        <div className="container">
                             <img src={User} alt="user"  />
                            </div>
                    </div>
                    <div className="container imgAvatar">
                             <img src={User} alt="user"   />
                    </div>

                        <br/>
                        <form onSubmit={Sign}>

                        
                        <div>
                            <input name="user" className="input inputts mt-3" type="text" placeholder="Usuario o email" required onChange={actualizarEstado} value={user}/>
                                <br/><br/>
                            <input name="password" className="input inputts" type="password" placeholder="Contraseña" required onChange={ actualizarEstado} value={password} />
                                <br/>
                        </div>
                       
                        <p className="text3 mb-3">Olvide mi contraseña</p>
                        <div className="btn">
                             <button type="submit" className="btn button has-text-weight-bold is-fullwidth">Iniciar Seción</button>
                            </div>
                     
                            <br/>
                        <p className="text1">Crear una cuenta</p>
                        </form>
                </div>
              
                <br/>
                <div>
                        <p className="text2">
                        Lorem ipsum dolor sit amet, <br/> 
                        consetetur sadipscing elitr, <br/>
                        sed diam nonumy eirmod tempor invidunt ut <br/>
                     
                        </p>
                    
                </div>
                <br/>
            </div>
        </>
     );
}
 
export default Login;