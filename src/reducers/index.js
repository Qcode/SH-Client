import { CHANGE_GAME_STATE } from './eventTypes';

const initialState = {
  gameState: 'login',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_GAME_STATE:
      return { ...state, gameState: action.newState };
    default:
      return state;
  }
};

export default rootReducer;
