import PropTypes from 'prop-types';
import { StatDataWrap, StatData } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatDataWrap>
      <StatData>Good: {good} </StatData>
      <StatData>Neutral: {neutral}</StatData>
      <StatData>Bad: {bad}</StatData>
      <StatData>Total: {total}</StatData>
      <StatData>Positive feedback: {positivePercentage}%</StatData>
    </StatDataWrap>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
