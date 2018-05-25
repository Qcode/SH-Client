import {
  CHANGE_GAME_STATE,
  SYNC_USERS,
  CHANGE_GAME_STAGE,
  SYNC_USER,
  GET_SCORE,
} from './eventTypes';

const initialState = {
  gameState: 'login',
  gameStage: 'chooseChancellor',
  users: {},
  score: { liberal: 0, fascist: 0 },
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
    case SYNC_USER: {
      return {
        ...state,
        users: {
          ...state.users,
          [action.user.id]: action.user,
        },
      };
    }
    case GET_SCORE: {
      return {
        ...state,
        score: action.score,
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
