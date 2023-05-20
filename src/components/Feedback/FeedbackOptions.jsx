import PropTypes from 'prop-types';
import {
  Button,
  ButtonItem,
  ButtonLayout,
  ButtonList,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeavefeedback }) => {
  return (
    <ButtonLayout>
      <ButtonList>
        {options.map(option => {
          return (
            <ButtonItem key={option}>
              <Button type="button" onClick={() => onLeavefeedback(option)}>
                {option}
              </Button>
            </ButtonItem>
          );
        })}
      </ButtonList>
    </ButtonLayout>
  );
};

FeedbackOptions.propTypes = {
  onLeavefeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
