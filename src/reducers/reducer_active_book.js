//reducers get 2 arguments (state, action)
//state: not application state, only the state this reducer is responsive for
//action: reducers only get called when action occurs
export default function(state = null, action) {
  switch(action.type){
    case 'BOOK_SELECTED':
      return action.payload
  }
  return state
}
