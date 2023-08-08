import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e4",
    title: "A Book",
    amount: 35,
    date: new Date(2022, 4, 15),
  },
  {
    id: "e5",
    title: "Clothes",
    amount: 150,
    date: new Date(2022, 9, 7),
  },
  {
    id: "e6",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2023, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    //using a function since the state depends on the previous state
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
