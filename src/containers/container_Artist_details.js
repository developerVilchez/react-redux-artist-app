import { connect } from 'react-redux';
import ArtistDetails from '../components/Artist-details';


//Esta funcion representa el enlace de redux con react
function mapStateToProps(state){
  return { pericolaspelotas : state.active_artist }
 }
 

 export default connect(mapStateToProps)(ArtistDetails)