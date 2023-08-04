import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../ui/Card";

function Expenses({ items }) {
  return (
    <Card className="expenses">
      {items.map((item) => (
        <ExpenseItem expense={item} key={item.id} />
      ))}
    </Card>
  );
}

export default Expenses;
