import {useState} from 'react';
import Statistics from './statistics';
import FeedbackOptions from './feedbackOptions';
import Notification from './notification';
import Section from './section';

export default function App () {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const onIncrement = e => {
    const { id } = e.target;
    switch (id) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        return 'Русский корабль, иди нахуй!'
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return (
      (good /
        (good + neutral + bad)) *
      100
    );
  };

  return (
      <Section title="Please leave feedback">
        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={onIncrement} />
        {!countTotalFeedback() ? (
          <Notification title="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={Math.floor(countPositiveFeedbackPercentage())}
          />
        )}
      </Section>
    );
};