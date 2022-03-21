import './ExpenseItem.css';

function ExpenseItem(props){
    // const ExpenseDate = Date(2022,3,8);
    // const ExpenseTitle ="Car"
    // const ExpensePrice = 999.3;
    return(
        <div className='expense-item'>
            <div>{props.date}</div>            {/* {ExpenseDate} */} {/* March 28 2022 */}
            <div className='expense-item__description'>
                <h2>{props.title}</h2></div>   {/* <h2>{ExpenseTitle}</h2> */}{/* <h2>Car</h2> */}
            <div className='expense-item__price'>
                ${props.price}</div>           {/* ${ExpensePrice} */}{/* $999 */}
        </div>
        
    );    
}
export default ExpenseItem;