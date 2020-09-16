import React from 'react';

export const DetailContact = ({ name, pictureUrl, popularity }) => {
  return (
    <div className="card-contact">
      <p className="img-contact">
        <img src={pictureUrl} alt="" />
      </p>
      <p className="name-contact">{name}</p>
      <p className="popu-contact">{popularity}</p>
    </div>
  );
};

export default DetailContact;
