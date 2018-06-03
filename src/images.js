import liberalPolicy from './assets/liberal-policy.png';
import fascistPolicy from './assets/fascist-policy.png';
import fascistBoardSmall from './assets/fascist-board-small.png';
import fascistBoardMedium from './assets/fascist-board-medium.png';
import fascistBoardLarge from './assets/fascist-board-large.png';
import liberalBoard0 from './assets/liberal-board-0.png';
import liberalBoard1 from './assets/liberal-board-1.png';
import liberalBoard2 from './assets/liberal-board-2.png';
import liberalBoard3 from './assets/liberal-board-3.png';
import liberalRole1 from './assets/liberal1.png';
import liberalRole2 from './assets/liberal2.png';
import liberalRole3 from './assets/liberal3.png';
import liberalRole4 from './assets/liberal4.png';
import liberalRole5 from './assets/liberal5.png';
import liberalRole6 from './assets/liberal6.png';
import fascistRole1 from './assets/fascist1.png';
import fascistRole2 from './assets/fascist2.png';
import fascistRole3 from './assets/fascist3.png';
import hitlerRole from './assets/hitler.png';
import unknownRole from './assets/unknown.png';

export default {
  liberalBoards: {
    0: liberalBoard0,
    1: liberalBoard1,
    2: liberalBoard2,
    3: liberalBoard3,
  },
  fascistBoards: {
    small: fascistBoardSmall,
    medium: fascistBoardMedium,
    large: fascistBoardLarge,
  },
  policies: {
    fascist: fascistPolicy,
    liberal: liberalPolicy,
  },
  roles: {
    liberal: {
      1: liberalRole1,
      2: liberalRole2,
      3: liberalRole3,
      4: liberalRole4,
      5: liberalRole5,
      6: liberalRole6,
    },
    fascist: {
      1: fascistRole1,
      2: fascistRole2,
      3: fascistRole3,
    },
    hitler: hitlerRole,
    unknown: unknownRole,
  },
};
