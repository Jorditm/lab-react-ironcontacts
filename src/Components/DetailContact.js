import React from 'react';

export const DetailContact = ({
  name,
  pictureUrl,
  popularity,
  deleteContact,
  id,
}) => {
  return (
    <div className="card-contact">
      <p className="img-contact">
        <img src={pictureUrl} alt="" />
      </p>
      <p className="name-contact">{name}</p>
      <p className="popu-contact">{popularity}</p>
      <button
        className="deleteBtn"
        onClick={() => deleteContact(id)}
        type="button"
      >
        Delete
      </button>
    </div>
  );
};

export default DetailContact;
