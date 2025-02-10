import React from 'react';
import './containerCreateList.css';

interface containerCreateListProps{
    children: React.ReactNode;
}

export default function ContainerCreateList( {children}:containerCreateListProps ){
    return (
        <section className="containerCreateList">
            { children }
        </section>
    );
}