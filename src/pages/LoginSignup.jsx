import React from 'react';
import { Link } from 'react-router-dom'
import './css/LoginSignup.css'
import { FcGoogle } from "react-icons/fc";
function LoginSignup() {
  return (
    <section class="container forms">
    <div className="form signup">
    <div className="form-content">
        <header>Signup</header>
        <form action="#">
            <div className="field input-field">
                <input type="email" placeholder="Email" className="input"/>
            </div>
            <div className="field input-field">
                <input type="password" placeholder="Create password" className="password"/>
            </div>
            <div className="field input-field">
                <input type="password" placeholder="Confirm password" className="password"/>
                <i className='bx bx-hide eye-icon'></i>
            </div>
            <div className="field button-field">
                <button>Signup</button>
            </div>
        </form>
        <div className="form-link">
            <span>Already have an account? <a href="#" className="link login-link">Login</a></span>
        </div>
    </div>
    <div className="line"></div>
    <div className="media-options">
        <a href="#" className="field facebook">
        
            <span>Login with Facebook</span>
        </a>
    </div>
    <div className="media-options">
        <a href="#" className="field google">
        <FcGoogle style={{width:"1.5rem"}}/>
            <span>Login with Google</span>
        </a>
    </div>
</div>
</section>
    )
}

export default LoginSignup;
