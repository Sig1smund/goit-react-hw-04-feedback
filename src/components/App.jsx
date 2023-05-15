import {useState} from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import Section from './Section';

const initialValue = {
  good: 0,
  neutral: 0,
  bad: 0
};

export default function App () {
  const [state, setState] = useState(initialValue)
  const { good, neutral, bad } = state;
  // const [neutral, setNeutral] = useState(initialValue)
  // const [bad, setBad] = useState(initialValue)

  const onIncrement = e => {
    const { name } = e.target.dataset;
    // switch (name) {
    //   case 'good':
    //     return setState({
    //       ...state,
    //       good: good + 1,
    //     });
    //   case 'neutral':
    //     return setState({
    //       ...state,
    //       neutral: neutral + 1,
    //     });
    //   case 'bad':
    //     return setState({
    //       ...state,
    //       bad: bad + 1,
    //     });
    
    //   default:
    //     return 'Enexpected dich occured';
    // };

    if (name) {
      setState(state => {
        return {
          ...state,
          [name]: state[name] + 1,
        };
      })
    }
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = state;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = state;
    return (
      (good /
        (good + neutral + bad)) *
      100
    );
  };

  return (
      <Section title="Please leave feedback">
      <FeedbackOptions
        options={Object.keys(state)}
        onLeaveFeedback={onIncrement}
        good={good} neutral={neutral} bad={bad}
      />
        {!countTotalFeedback() ? (
        <Notification
          title="There is no feedback" />
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