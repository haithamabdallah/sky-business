import React from "react";
import "../pageCover/pageCover.css";
import parse from "html-react-parser";
const PageCover = ({ title, subtitle, backgroundImage }) => {
    return (
        <section className="pageCover" style={{ backgroundImage: `url(${backgroundImage})` , backgroundPosition: 'center' , backgroundSize: 'cover' }}>
            <div className="coverContent">
                <div className="coverData p-3">
                    <h1>{title}</h1>
                    <p>{parse(subtitle)}</p>
                </div>
            </div>
        </section>
    );
};

export default PageCover;
