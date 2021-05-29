import './Expenses.css';
import ExpenseItem from './ExpenseItem';

function Expenses(props){

    return(
        <div className = "expenses">
            <ExpenseItem title3 = {props.items[0].title} date3 = {props.items[0].date} amount3 = {props.items[0].amount}></ExpenseItem>

        </div>
    );

}

export default Expenses;