import PropTypes from 'prop-types';
import {TransactionCard} from 'components/TransactionHistory/TransactionCard';

export const TransactionHistory = ({items}) => {
  return (<div>
  {items.map(item => (
    <TransactionCard key={item.id} props={item}/>
  ))}
</div>)
}

TransactionHistory.propTypes = {
   items: PropTypes.arrayOf(PropTypes.shape({
     id: PropTypes.string.isRequired,
   }))
 }

