import PropTypes from 'prop-types';
import {TableDataWithResult, Thead, TableData, ResultTransactions, TitelTransactions, DiscriptionTransactions} from 'components/TransactionHistory/TransactionStyled';

export const TransactionCard = ({props: {type, amount, currency}}) => {
   return (<DiscriptionTransactions>
<Thead>
  <TableData>
    <TitelTransactions>Type</TitelTransactions>
    <TitelTransactions>Amount</TitelTransactions>
    <TitelTransactions>Currency</TitelTransactions>
  </TableData>
</Thead>

<tbody>
  <TableDataWithResult>
    <ResultTransactions>{type}</ResultTransactions>
    <ResultTransactions>{amount}</ResultTransactions>
    <ResultTransactions>{currency}</ResultTransactions>
  </TableDataWithResult>
</tbody>
</DiscriptionTransactions>)
}

TransactionCard.propTypes = {
   items: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }))
}

