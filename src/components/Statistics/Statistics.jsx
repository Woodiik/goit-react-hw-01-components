import PropTypes from "prop-types";
import { Title, List,ListEl, Container } from "./Statistics.styled";

export const Statistics = ({ title, stats }) => {
  return <Container>
    {title && (
  <Title>{title}</Title>
    )}
    <List>
      {stats.map(el => 
    <ListEl key={el.id}>
      <span>{el.label}</span>
      <span>{el.percentage}%</span>
    </ListEl>
      )}
  </List>
</Container>
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  })).isRequired
}