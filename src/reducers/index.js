import {
  SET_GAME_STATE,
  SYNC_USERS,
  SET_GAME_STAGE,
  SYNC_USER,
  SYNC_SCORE,
  GAME_OVER_REASON,
  FASCIST_POWER,
  FASCIST_INFO,
  GET_MEMO,
  DISMISS_MEMO,
  SYNC_FAILED_GOVERNMENTS,
} from './eventTypes';

const initialState = {
  gameState: 'login',
  gameStage: 'chooseChancellor',
  users: {},
  score: { liberal: 0, fascist: 0 },
  fascistPower: 'none',
  // Fascist info could be:
  // array of 3 cards after peeking draw pile
  // fascist/liberal after peeking secret rol
  fascistInfo: undefined,
  memoQueue: [],
  failedGovernments: 0,
  receivedVetoRequest: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GAME_STATE:
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
    case SYNC_SCORE: {
      return {
        ...state,
        score: action.score,
      };
    }
    case SET_GAME_STAGE: {
      return { ...state, gameStage: action.newStage, receivedVetoRequest: false };
    }
    case GAME_OVER_REASON: {
      return { ...state, gameOverReason: action.reason };
    }
    case FASCIST_POWER: {
      return { ...state, fascistPower: action.power };
    }
    case FASCIST_INFO: {
      return { ...state, fascistInfo: action.info };
    }
    case GET_MEMO: {
      return { ...state, memoQueue: state.memoQueue.concat([action.memo]) };
    }
    case DISMISS_MEMO: {
      return { ...state, memoQueue: state.memoQueue.slice(1) };
    }
    case SYNC_FAILED_GOVERNMENTS: {
      return { ...state, failedGovernments: action.failedGovernments };
    }
    default:
      return state;
  }
};

export default rootReducer;
