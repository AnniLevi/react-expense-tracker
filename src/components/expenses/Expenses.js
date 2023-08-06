import "./Expenses.css";
import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../ui/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses({ items }) {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {items.map((item) => (
        <ExpenseItem expense={item} key={item.id} />
      ))}
    </Card>
  );
}

export default Expenses;
