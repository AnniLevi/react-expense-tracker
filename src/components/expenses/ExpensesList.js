import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

function ExpensesList({ items }) {
  if (items.length === 0) {
    return <p className="expenses-list__fallback">No expenses found</p>;
  }
  return (
    <ul className="expenses-list">
      {items.map((item) => (
        <ExpenseItem expense={item} key={item.id} />
      ))}
    </ul>
  );
}

export default ExpensesList;
