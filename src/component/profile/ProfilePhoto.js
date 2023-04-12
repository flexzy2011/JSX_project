import React from "react"
import myprofile from './felix.jpg';

//ProfilePhoto.js is a functional component that returns the ProfilePhoto below.


const ProfilePhoto = () =>  {

    return (

        <div className="me">
           <img src={myprofile} alt= "felix"/>
            
        </div>
    );
};


export default ProfilePhoto;