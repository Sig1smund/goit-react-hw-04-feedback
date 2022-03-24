import s from './notification.module.css';

import propTypes from 'prop-types';

export default function Notification({ title }) {
  return <p className={s.header}>{title}</p>;
}

Notification.propTypes = {
  title: propTypes.string,
};
