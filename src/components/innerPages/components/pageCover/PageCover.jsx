import React from 'react';
import '../pageCover/pageCover.css';

const PageCover = ({ title, subtitle, backgroundImage }) => {
    return (
        <section className="pageCover" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="coverContent">
                <div className="coverData">
                    <h1>{title}</h1>
                    <p>{subtitle}</p>
                </div>
            </div>
        </section>
    );
};

export default PageCover;
