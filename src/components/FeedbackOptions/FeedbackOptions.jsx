import { ConstainerButton, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
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
};
