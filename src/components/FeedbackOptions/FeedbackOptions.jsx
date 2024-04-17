import React, { Component } from 'react';
import { ConstainerButton, Button } from './FeedbackOptions.styled';

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <>
        <ConstainerButton>
          {options.map(btName => (
            <Button
              key={btName}
              type="submit"
              name={btName}
              onClick={() => onLeaveFeedback(btName)}
            >
              {btName[0].toUpperCase() + btName.slice(1)}
            </Button>
          ))}
        </ConstainerButton>
      </>
    );
  }
}
