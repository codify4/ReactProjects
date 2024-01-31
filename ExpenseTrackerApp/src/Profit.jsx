import { useState } from "react";
import ExpenseTracker from "./ExpenseTracker";

const Profit = () => {

    const [income, setIncome] = useState(0);
    const [profit, setProfit] = useState(0);

    const calculateProfit = () => {

        setProfit(p);
    }
    return (
        <div>
            <label htmlFor="">
                Monthly Income: $ 
                <input type="number" className="w-24" value={income}
                    onChange={ (e) => setIncome(e.target.value) }
                />
            </label>

            <ExpenseTracker />
            
            <div onChange={calculateProfit}>Your Profit per Month is: ${profit}</div>

        </div>
    );
}

export default Profit;