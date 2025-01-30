import './userProfile.css';
import React from 'react';

interface userProfileProps{
    name: string;
}

export default function UserProfile( { name }:userProfileProps ){
    return(
        <section className="containerUserProfile">

            <section className="containerDataUserProfile">
            </section>

            <section className="containerImageUserProfile">
            </section>

        </section>
    );
}