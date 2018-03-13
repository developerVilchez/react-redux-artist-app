export default function (state = {name:'lulu', bio:'programo aprendo y desaprendo lo más rapido que puedo, mientras menos termino tech más sugar', url:'lulu.jpg'} , action){
  switch (action.type) {
    case 'ARTIST_SELECTED':
    return action.payload;
  }
  return state;

}

/* export default function (state = null , action){
  switch (action.type) {
    case 'ARTIST_SELECTED':
    return action.payload;
  }
  return state;
} */

