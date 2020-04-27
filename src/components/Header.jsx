import React from 'react';
import '../styles/Header.scss'

export default function Header() {
    return ( 
        <div className="header">
            <img className="header_img" src="https://res.cloudinary.com/mokaweb/image/upload/v1588011280/SocialBrothers/Foto-Social-Brothers-header-img.jpg" alt="social-brothers-header"/>
            <div className="logo-centered">
                 <img src="https://res.cloudinary.com/mokaweb/image/upload/v1588010070/SocialBrothers/SocialBrothers-logo.webp" alt="social-brothers-logo"/>
            </div>
        </div>
      );
}

