import { connect } from 'react-redux';
import ArtistList from '../components/Artist-list';
import { selectArtist } from '../actions/index';
import { bindActionCreators } from 'redux';

//Toma el estado de la aplicacion como argumente y todo lo que retorne será 
//una propiedad del container. Toma todo el estado y lo que retorne com funcion sera
// propiedad del container

//Esta funcion representa el enlace de redux con react
function mapStateToProps(state){
 return { artistas : state.artists }
}

// Ahora la function
//bindActionCreators le pasamos un objeto key:action (la accion que estas importando)
//Este bindActionCreators lo que realiza es : Cada vez que se llama a la function 
// selectArtist sea pasado a todos los reducers 

function mapDispatchToProps (dispatch){
  return bindActionCreators({ onArtistClick : selectArtist}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(ArtistList)