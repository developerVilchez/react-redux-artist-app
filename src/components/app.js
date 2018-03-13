import React from 'react';
import SearchBar from './SearchBar';
/* import ArtistDetails from './Artist-details'; */
/* import ArtistList from './Artist-list'; */
import ArtistList from '../containers/container_Artist_list';
import ArtistDetails from '../containers/container_Artist_details';

const App = () => (
  <div>
    <SearchBar />
   {/*  <ArtistList artistas = {Artistas} /> */}
   <ArtistList />
   <ArtistDetails />
  </div>
)

export default App
