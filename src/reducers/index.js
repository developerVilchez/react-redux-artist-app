import { combineReducers } from 'redux';
import artistsReducers from './reducer-artists';
import artistsActiveReducers from './reducer-active-artist'; 


const rootReducer = combineReducers ({
  artists : artistsReducers,
  active_artist : artistsActiveReducers
  
});

export default rootReducer;