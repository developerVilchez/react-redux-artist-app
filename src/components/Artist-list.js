import React from 'react';
import ArtistListItem from './Artist-list-item';

 const ArtistList = ( {artistas, onArtistClick } ) => (
  <ul className="col-md-4">
      {artistas.map(artista => 
         <ArtistListItem 
            key = {artista.name}
            onClick = {() => onArtistClick(artista)}
            {...artista}
         />
      )} 
  </ul>
  ) 

export default ArtistList