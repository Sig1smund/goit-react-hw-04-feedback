import s from './feedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className="buttons__block">
      {options.map(elem => {
        return (
          <button
            id={elem}
            key={elem}
            className={s.elem}
            type="button"
            onClick={onLeaveFeedback}
          >
            {elem}
          </button>
        );
      })}
    </div>
  );
}
