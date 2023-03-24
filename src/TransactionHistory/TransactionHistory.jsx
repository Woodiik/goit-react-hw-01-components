import PropTypes from "prop-types";
import { Table, TBody, THead } from "./TransactionHistory.styled";

export const TransactionHistory = ({ items }) => {
  return <Table>
  <THead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </THead>

    <TBody>
      {items.map(item => {
        return <tr key={item.id}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
      })}
  </TBody>
</Table>
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
  })).isRequired
}