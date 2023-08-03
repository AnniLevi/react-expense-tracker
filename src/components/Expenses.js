import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

function Expenses({ items }) {
  return (
    <Card className="expenses">
      <ExpenseItem expense={items[0]} />
      <ExpenseItem expense={items[1]} />
      <ExpenseItem expense={items[2]} />
      <ExpenseItem expense={items[3]} />
    </Card>
  );
}

export default Expenses;
