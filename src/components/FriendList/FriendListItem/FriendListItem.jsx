import React from 'react';
import PropTypes from 'prop-types';
import css from '../FriendList.module.css'

const FriendListItem = ({ avatar, name, isOnline }) => {
  const status = [isOnline ? css.online : css.offline]
  return (
    <li className={css.item}>
      <span className={status}>{isOnline}</span>
      <img className={css.avatar} src={avatar} alt="" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.defaultProps = {
  isOnline: false,
  avatar: 'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
  name: ''
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired
}

export default FriendListItem;
