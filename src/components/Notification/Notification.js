import PropTypes from 'prop-types';
import { MessageText } from './Notification.styled';

export const Notification = ({ message }) => (
  <MessageText>"{message}"</MessageText>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
