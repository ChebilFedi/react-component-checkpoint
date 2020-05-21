import React from 'react';
import imageInSrc from '../imageInSrc.jpeg';
import  '../style.css';
const ProfilPhoto=()=>{
    return(<div className="photo-profil">
        <img src={imageInSrc} height="200px" width="300px" />
    </div>);
}
export default ProfilPhoto;