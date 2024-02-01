import { useState } from "react";
import ExpenseTracker from "./ExpenseTracker";

const Profit = () => {

    const [expensesValue, setExpensesValue] = useState();
    const [income, setIncome] = useState();
    const [profit, setProfit] = useState();
    const [country, setCountry] = useState('');

    const handleExpensesChange = (expenses) => {
        setExpensesValue(expenses);
    }

    const calculateProfit = () => {
        let calculatedProfit = 0;

        switch(country){
            case "Shqiperi": 
                calculatedProfit = income - (0.15 * income) - expensesValue;
                break;
            case "USA":
                calculatedProfit = income - (0.12 * income) - expensesValue;
                break;
            case "Germany":
                calculatedProfit = income - expensesValue;
                break;
            default:
                calculateProfit = 0;
                break;
        }
        
        setProfit(calculatedProfit);
    }
    return (
        <div>
            <label htmlFor="country">
                Choose your country: 
                <select value={country} onChange={ (e) => setCountry(e.target.value) }>
                    <option value="" disabled>Select an option</option>
                    <option value="Shqiperi" >Shqiperi</option>
                    <option value="USA" > USA</option>
                    <option value="Germany" >Germany</option>
                </select>
            </label><br/>

            <label htmlFor="">
                Monthly Income: $ 
                <input type="number" className="w-24" value={income}
                    onChange={ (e) => setIncome(Number(e.target.value)) }
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