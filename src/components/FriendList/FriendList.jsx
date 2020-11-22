import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from '../FriendList/FriendListItem/FriendListItem';
import css from '../FriendList/FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend_list}>
      {friends.map(props => (
        <FriendListItem key={props.id} {...props} />
      ))}
    </ul>
  );
};

FriendList.defaultProps = {
  friends: [],
};

FriendList.protoTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default FriendList;
