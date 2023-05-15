import propTypes from 'prop-types';
import s from './section.module.css';

export default function Section({ title, children }) {
  return (
    <div className={s.container}>
      <h1 className="feedback__title">{title}</h1>
      {children}
    </div>
  );
}

Section.propTypes = {
  title: propTypes.string,
};
