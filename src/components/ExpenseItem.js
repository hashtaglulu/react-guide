import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {

  return (
    <div className="expense-item">
      <ExpenseDate dateFurther = {props.date3}/>
      <div className="expense-item__description">
        <h2>{props.title3}</h2>
        <div className="expense-item__price">${props.amount3}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
