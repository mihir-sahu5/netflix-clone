import React from 'react'
import "./profileScreen.css";
import Nav from '../../components/Navbar/Nav';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { auth } from '../../firebase';
import PlanScreen from "../planScreen/PlanScreen";


function ProfileScreen() {
    const user = useSelector(selectUser);
    return (
      <div className="profileScreen">
        <Nav />
        <div className="profileScreenBody">
          <h1>Edit Profile</h1>
          <div className="profileScreenInfo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt=""
            />
            <div className="profileScreenDetails">
              <h2>{user.email}</h2>
              <div className="profileScreenPlans">
  
                  <h3>Plans</h3>
                  <PlanScreen />
                <button onClick={() => auth.signOut()} className="profileScreenSignOut">Sign Out</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default ProfileScreen;