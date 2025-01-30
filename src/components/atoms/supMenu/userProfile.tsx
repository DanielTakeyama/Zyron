import './userProfile.css';
import '../../../styles/base.css'
import ImagePlaceholder from '../../../assets/images/placeholder_img.png';
import React from 'react';

interface userProfileProps{
    name: string;
}

export default function UserProfile( { name }:userProfileProps ){
    return(
        <section className="containerUserProfile">
            
            <section className="containerDataUserProfile">
                <h3 className="fontH3 nameUser">{name}</h3>
                <p>Meu perfil</p>
            </section>

            <section className="containerImageUserProfile">
                <img className="imageUser" src={ImagePlaceholder} alt="Imagem de Perfil"/>
            </section>

        </section>
    );
}