import React from 'react';
import perfil from '../../../Images/perfil.svg'

import './profile.scss'

const Profile = () => {
    return (
        <div className="profile-container">
            <img className="profile" src={perfil} alt="foto perfil" />
        </div>
    )
}

export default Profile
