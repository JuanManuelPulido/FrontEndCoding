import React from 'react';

function PersonalInfo(props) {
  return (
    <div>
      <img src={props.photo} alt={props.name} />
      <h1>{props.name}</h1>
      <p>{props.birthdate}</p>
    </div>
  );
}

export default PersonalInfo;