import React from 'react';
import "./styles/loading.css";

const Loading = () => {
    return(
        <div className="container py-5">
            <div className="progress">
                <div className="progress-bar bg-success" role="progressbar"  aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
    )
};

export default Loading;