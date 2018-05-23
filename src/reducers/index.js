import { CHANGE_GAME_STATE, SYNC_USERS, CHANGE_GAME_STAGE } from './eventTypes';

const initialState = {
  gameState: 'login',
  gameStage: 'chooseChancellor',
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
    case CHANGE_GAME_STAGE: {
      return { ...state, gameStage: action.newStage };
    }
    default:
      return state;
  }
};

export default rootReducer;
