import React from 'react';

const ArtistListItem = ({ name, url, onClick }) => (
  <li className="list-group-item" onClick={onClick}>
    <div className="artist-list">
      <div>
        <img className = "img-fluid"
          src = {url}
          alt = {name} 
        />
      </div>
      <div className="media-body">
        <p>{name}</p>
      </div>
    </div>
  </li>
)

export default ArtistListItem