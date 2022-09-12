import React, { useState } from 'react';
import "./loginScreen.css";
import SignUpScreen from "../signUpScreen/SignUpScreen";

function LoginScreen() {
    const [signIn,setSignIn] = useState(false);
  return (
    <div className='loginScreen'>
        <div className='loginScreenBackground'>
            <img className='loginScreenLogo' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt=""></img>
            <button className='loginScreenButton' onClick={()=>setSignIn(true)}>Sign In</button>
            <div className='loginScreenGradient'/>
        </div>
        <div className='loginScreenBody'>
            {signIn ? (
                <SignUpScreen />
            ):(
                <>
                    <h1>Unlimited films, TV programmes and more.</h1>
                    <h2>Watch anywhere and cancel at anytime</h2>
                    <h3>Ready to watch? Enter your email to create or restart your
                    membership.
                    </h3>
                    <div className="loginScreenInput">
                        <form action="">
                            <input type="email" placeholder="Email Address" />
                            <button
                            onClick={()=>setSignIn(true)}
                            className="loginScreenGetStarted"
                            >Get Started</button>
                        </form>
                    </div>
                </>
            )}
            
        </div>
    </div>
  )
}

export default LoginScreen