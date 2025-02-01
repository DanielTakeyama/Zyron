import './userProfile.css';
import '../../../styles/base.css'
import React from 'react';

interface userProfileProps{
    name: string;
    image: string;
}

export default function UserProfile( { name, image}:userProfileProps ){
    return(
        <section className="containerUserProfile">
            
            <section className="containerDataUserProfile">
                <h3 className="fontH3 nameUser">{name}</h3>
                <p className="myProfileFont">Meu perfil</p>
            </section>

            <section className="containerImageUserProfile">
                <img className="imageUser" src={image} alt="Imagem de Perfil"/>
            </section>

        </section>
    );
} 