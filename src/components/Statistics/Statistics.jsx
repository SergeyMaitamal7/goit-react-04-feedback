import { Component } from 'react';
import { Text } from './Statistics.style';

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, positivePercentage, total } = this.props;
   
    return (
      <>
        <Text>Good: {good}</Text>
        <Text>Neutral: {neutral}</Text>
        <Text>Bad: {bad}</Text> <Text>Total: {total}</Text>
        <Text>Positive Feedback: {positivePercentage}</Text>
      </>
    );
  }
}
