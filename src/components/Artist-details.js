import React from 'react';

const ArtistDetails = ({ pericolaspelotas }) => (
  <div className="artist-detail col-md-8">
    <div className="details">
      <div>{pericolaspelotas.name}</div>
      <div>{pericolaspelotas.bio}</div>
      <div>
        <img className="img-fluid" src={pericolaspelotas.url} alt={pericolaspelotas.name}/>
      </div>
    </div>
  </div>
)

export default ArtistDetails