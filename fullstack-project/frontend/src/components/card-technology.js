import React from 'react';

const CardTechnology = ({name, logo, description}) => (
    <div className="card text-white bg-success mb-3 mx-auto" style={{maxWidth: '20rem'}}>
        <div className="card-header">
            <h4 className="card-title text-center">{name}</h4>
        </div>
        <div className="card-body">
            <img src={logo} alt={name} className="mx-auto d-block mb-4" style={{
                maxWidth: '15rem',
                maxHeight: '10rem'
            }}/>
            <p className="card-text">{description}</p>
    </div>
  </div>
);

export default CardTechnology;