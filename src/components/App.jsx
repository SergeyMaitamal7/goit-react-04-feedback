import { useState } from 'react';

import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Container } from './App.styled';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const handleClick = option => {
    switch (option) {
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
        return;
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedback = () => {
    const total = good + neutral + bad;
    return `${((good / total) * 100).toFixed(0)}%`;
  };

  const total = countTotalFeedback();
  const positiveFeedback = countPositiveFeedback();

  return (
    <>
      <Container>
        <Section title={'Please leave Feedback'}>
          <FeedbackOptions options={options} onLeaveFeedback={handleClick} />
        </Section>
        <Section title={'Statistics'}>
          {total === 0 ? (
            <Notification text={'There is no feedback'} />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positiveFeedback}
            />
          )}
        </Section>
      </Container>
    </>
  );
};
