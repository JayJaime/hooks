import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  const searchIcon = <FontAwesomeIcon icon={faSearch} />;
  const [userInfo, setInfo] = useState([]);
  const [input, setInput] = useState("");
  const [userName, setUser] = useState("octocat");
  const url = `https://api.github.com/users/${userName}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setInfo(data));
  }, [userName]);

  console.log(userInfo);

  const handleForm = (e) => {
    //   prevent default settings
    e.preventDefault();
    // set user
    setUser(input);
    // clear search field
    setInput("");
  };

  return (
    <div>
      <form className="search-wrapper" onSubmit={handleForm}>
        <i className="search-icon">{searchIcon}</i>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="search"
          placeholder="Search Github username..."
          id="search-box"
          value={input}
        ></input>
        <button className="search-btn">Search</button>
      </form>
      <div className="content-wrapper">
        <div className="img-wrapper">
          <img src={userInfo.avatar_url} alt="user image"></img>
        </div>
        <div className="intro-wrapper">
          <div className="top-wrapper">
            <div className="name-wrapper">
              <h1>{userInfo.name}</h1>
              <p className="blue">@{userInfo.login}</p>
            </div>
            <div className="date-wrapper">
              <p>Joined {userInfo.created_at}</p>
            </div>
          </div>
          <div className="body-wrapper">
            <p>{userInfo.bio}</p>
            <div className="stats-wrapper">
              <div className="stat">
                <p>Repos</p>
                <h4>{userInfo.public_repos}</h4>
              </div>
              <div className="stat">
                <p>Followers</p>
                <h4>{userInfo.followers}</h4>
              </div>
              <div className="stat">
                <p>Following</p>
                <h4>{userInfo.following}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
