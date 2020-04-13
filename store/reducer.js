import { actionTypes } from './actions'

export const defaultState = {
  imgUrl: ''
}

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.UPDATE_DOG_SUC:
      let newState = JSON.parse(JSON.stringify(state))
      newState.imgUrl = action.imgUrl
      return newState
    default:
      return state
  }
}

export default reducer