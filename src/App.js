import logo from './logo.svg';
import './App.css';
import ExpenseItem from './component/ExpenseItem';

const expenses = [
  {id:"e1", title:"food", price:64.90, date: new Date(2022,11,11)},
  {id:"e2", title:"gas", price:121.60, date: new Date(2022,10,10)},
  {id:"e3", title:"water", price:80.80, date: new Date(2022,11,11)},
  {id:"e4", title:"market", price:180.45, date: new Date(2022,10,10)},
  {id:"e5", title:"electric", price:80.80, date: new Date(2022,12,12)}
];

function App() {
  return (
    <div className="App">
      <h2>WELCOME</h2>
      <ExpenseItem>title={expenses[0].title} price={expenses[0].price} date={expenses[0].date}</ExpenseItem>
      <ExpenseItem>title={expenses[1].title} price={expenses[1].price} date={expenses[1].date}</ExpenseItem> 
      <ExpenseItem>title={expenses[2].title} price={expenses[2].price} date={expenses[2].date}</ExpenseItem> 
      <ExpenseItem>title={expenses[3].title} price={expenses[3].price} date={expenses[3].date}</ExpenseItem> 
      <ExpenseItem>title={expenses[4].title} price={expenses[4].price} date={expenses[4].date}</ExpenseItem> 
    </div>
  );
}

export default App;
