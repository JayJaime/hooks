import React, { useState } from "react";

// To grab VALUE from the state and display it in the component
import { useSelector } from "react-redux";

export default function Profile() {
  const key = `IHFta3UAH3C9MQNFdqfnPtzvOydSCRKuqO6VM_3Fzhw`;
  const url = `https://api.unsplash.com/photos/random/?client_id=${key}`;
  const [image, setImage] = useState([]);

  fetch(url)
    .then((response) => response.json())
    .then((data) => setImage(data.urls.regular));
  //set user variable to the user state with useSelector
  const user = useSelector((state) => state.user.value);
  return (
    <div className="profile-wrapper">
      <div className="img-wrapper">
        <img src={image} alt="profile" />
      </div>
      <div className="info-wrapper">
        <div className="name-wrapper">
          <h1>{user.name}</h1>
          <h2 className="age-txt">{user.age}</h2>
        </div>
        <p>{user.email}</p>
      </div>
    </div>
  );
}
