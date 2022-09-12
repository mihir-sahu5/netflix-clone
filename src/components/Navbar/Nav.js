import React, { useEffect, useState } from 'react'
//import { Link } from 'react-router-dom';
import { useHistory ,Link} from 'react-router-dom';
import './nav.css';
function Nav() {
    const [show,setShow] =useState(false);
    const history = useHistory();
    const transitionNavBar = () =>{
        if(window.scrollY>100){
            setShow(true);
        }else{
            setShow(false);
        }
    };
    useEffect(()=>{
        window.addEventListener("scroll",transitionNavBar);
        return () => window.removeEventListener("scroll",transitionNavBar);
    },[]);
  return (
    <div className={`nav ${show && 'navBlack'}`}>
        <div className='navContent'>
            <img onClick={()=> history.push("/")} className="navLogo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt=""/>
            <Link to="/profile">
                <img className="navAvatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt=""/>
            </Link>
            
        </div>
    </div>
  )
}

export default Nav