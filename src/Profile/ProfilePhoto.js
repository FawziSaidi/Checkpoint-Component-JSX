import React from 'react'
import thephoto from'../Images/photo.jpg'

function ProfilePhoto() {
    return (
        <div>
            <img className ="images" src={thephoto} alt="photo_de_moi"/>
        </div>
    )
}

export default ProfilePhoto