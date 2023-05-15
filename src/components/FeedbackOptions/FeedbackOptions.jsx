import classNames from 'classnames';
import { nanoid } from 'nanoid';
import s from './feedbackOptions.module.css';

export default function FeedbackOptions({
  options,
  onLeaveFeedback,
  good,
  neutral,
  bad,
}) {
  return (
    <div className={s.container}>
      {Array.isArray(options) &&
        options.map(elem => {
          return (
            <div key={nanoid(3)} className={s.buttonBox}>
              <button
                id={nanoid(4)}
                data-name={elem}
                className={classNames(
                  s.button,
                  { [s.good]: elem === 'good' },
                  { [s.neutral]: elem === 'neutral' },
                  { [s.bad]: elem === 'bad' }
                )}
                type="button"
                onClick={onLeaveFeedback}
              >
                {elem.charAt(0).toUpperCase() + elem.slice(1)}
                {<br />}
                {elem === 'good' && <span className={s.tag}>{good}</span>}
                {elem === 'neutral' && <span className={s.tag}>{neutral}</span>}
                {elem === 'bad' && <span className={s.tag}>{bad}</span>}
              </button>
            </div>
          );
        })}
    </div>
  );
}
