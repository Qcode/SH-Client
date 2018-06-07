const getGameSize = userCount =>
  ({
    1: 'small',
    5: 'small',
    6: 'small',
    7: 'medium',
    8: 'medium',
    9: 'large',
    10: 'large',
  }[userCount]);

const getRoleFromUser = (user) => {
  if (user.isLiberal) {
    return 'liberal';
  }
  if (typeof user.isLiberal === 'undefined') {
    return 'unknown';
  }
  if (user.isHitler) {
    return 'hitler';
  }
  return 'fascist';
};

const voteToString = (vote) => {
  if (vote === 1) {
    return 'Ja!';
  } else if (vote === 0) {
    return 'Nein!';
  }
  return vote;
};

export { getGameSize, getRoleFromUser, voteToString };
