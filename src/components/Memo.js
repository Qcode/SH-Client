import React from 'react';
import PropTypes from 'prop-types';

function Memo(props) {
  return (
    <div>
      <p>{props.memo}</p>
      <button type="button" onClick={props.dismissMemo}>
        Dismiss Memo
      </button>
    </div>
  );
}

Memo.propTypes = {
  memo: PropTypes.string.isRequired,
  dismissMemo: PropTypes.func.isRequired,
};

export default Memo;
