import PropTypes from 'prop-types';
import {List, Item, Label, Percentage} from 'components/Profile/Statistics/Statistics.styled';


export const StatisticCard = ({stats}) => {
 return  (
        <List>
      {stats.map(item => (
        <Item key={item.id} item={item}>
          <Label>{item.label}</Label>
          <Percentage>{item.percentage}</Percentage>
        </Item>
        ))}
      </List>
      )
}


StatisticCard.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }))
}

