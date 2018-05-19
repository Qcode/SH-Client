import { CHANGE_GAME_STATE, SYNC_USERS } from './eventTypes';

const initialState = {
  gameState: 'login',
  users: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_GAME_STATE:
      return { ...state, gameState: action.newState };
    case SYNC_USERS: {
      const { primaryUserId, ...users } = action.users;
      return {
        ...state,
        primaryUserId,
        users,
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
