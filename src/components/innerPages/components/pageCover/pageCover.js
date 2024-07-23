import React from 'react';
import './cover.css';

const PageCover = ({ title, subtitle, backgroundImage }) => {
    const coverStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '290px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
    };

    return (
        <div style={coverStyle}>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
    );
};

export default PageCover;
