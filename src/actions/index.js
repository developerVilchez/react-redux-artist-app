export function selectArtist(artist){
  //Aqui tiene como parámetro el objeto con el artist
  // {name : 'Shakira', bio : 'cantautora, productora discográfica, bailarina, modelo, empresaria, actriz, embajadora de buena voluntad de la UNICEF y filántropa colombiana', url : 'shakira.jpg' , canciones : ['ojos asi', 'tu', 'inevitable']}
  // console.log('Un artista ha sido seleccionado',  artist.name);
  return {
    type: 'ARTIST_SELECTED',
    payload:artist
  }
} 