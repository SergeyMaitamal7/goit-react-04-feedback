import React, { Component } from 'react';

import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Container } from './App.styled';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return `${((good / total) * 100).toFixed(0)}%`;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const arrBtnNames = Object.keys(this.state);
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    
    return (
      <>
        {' '}
        <Container>
          <Section title={'Please leave Feedback'}>
            {' '}
            <FeedbackOptions
              options={arrBtnNames}
              onLeaveFeedback={this.handleClick}
            />
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
  }
}
