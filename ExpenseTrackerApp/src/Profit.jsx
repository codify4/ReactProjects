import { useState } from "react";
import ExpenseTracker from "./ExpenseTracker";

const Profit = () => {

    const [expensesValue, setExpensesValue] = useState(0);
    const [income, setIncome] = useState(0);
    const [profit, setProfit] = useState(0);

    const handleExpensesChange = (expenses) => {
        setExpensesValue(expenses);
    }

    const calculateProfit = () => {
        const calculatedProfit = income - expensesValue;
        setProfit(calculatedProfit);
    }
    return (
        <div>
            <label htmlFor="">
                Monthly Income: $ 
                <input type="number" className="w-24" value={income}
                    onChange={ (e) => setIncome(e.target.value) }
                />
            </label>

            <ExpenseTracker onExpensesChange={handleExpensesChange} />

            <button className='bg-green-600 hover:bg-green-500 w- 
                    rounded text-xl'
                    onClick={calculateProfit}>
                    Calculate Profit
            </button>
            
            <div>Your Profit per Month is: ${profit}</div>
        </div>
    );
}

export default Profit;