import React, {useState} from 'react'
import { Link , useHistory } from 'react-router-dom'
import { auth } from './firebase';
import './Login.css';
import logo from "./Images/logo2.png";

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth 
            .signInWithEmailAndPassword(email, password)
            .then((auth)  => {
                //it successfully signIn a user with Email and Password 
                if(auth){
                    history.push('/')
                }   
                
            }
                
            )
            .catch(error => alert(error.message))


    }

    const register = e => {
        e.preventDefault();
        
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth)  => {
                //it successfully created a new user with Email and Password 
                if(auth){
                    history.push('/')
                }   
                
            })
            .catch(error => alert(error.message))

    }

    return (
        <div className='login'>
            <Link to = '/'>
                <img className="login__logo" src={logo} alt='logo'/>
            </Link> 

            <div className='login__container'>
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                    <button type ='submit' onClick={signIn} className='login__signButton'>Sign In</button>
                </form>
                <p className='login__info'>
                    By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>
                <a href="#">Forgot Password?</a>
                <button type='submit' onClick={register} className='login__registerButton'>Create Your Amazon Account</button>
            </div>

        </div>
    )
}


export default Login
