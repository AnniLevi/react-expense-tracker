import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses({ items }) {
  return (
    <div className="expenses">
      <ExpenseItem expense={items[0]} />
      <ExpenseItem expense={items[1]} />
      <ExpenseItem expense={items[2]} />
      <ExpenseItem expense={items[3]} />
    </div>
  );
}

export default Expenses;
