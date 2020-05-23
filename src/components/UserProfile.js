import React from 'react'
import profilePicture from '../res/user-icon.png';

export default function UserProfile(props) {
    return (
        <div className='user-profile-container'>
            <div className='info'>
                <img className='profile-picture' src={profilePicture} />
                <p className='info-username'>{props.username}</p>
                <p className='info-username'>LVL {props.lvl}</p>
            </div>
            <div className='utility-buttons'>
            
            </div>
        </div>
    )
}
