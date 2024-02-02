import { useState } from "react";
import ExpenseTracker from "./ExpenseTracker";

const Profit = () => {

    const [expensesValue, setExpensesValue] = useState();
    const [income, setIncome] = useState();
    const [profit, setProfit] = useState();
    const [country, setCountry] = useState('');

    const countryCurrecies = {
        Shqiperi: "Lek",
        USA: "$",
        Germany: "€",
    }

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
        <div className="flex flex-col items-center justify-center w-[400px] h-[500px] bg-[#1f1f1f] rounded-lg text-xl gap-1 p-3 shadow-lg">
            <label htmlFor="country" className="">
                Choose your country:  
                <select className= "bg-[#1f1f1f] rounded underline text-center ml-1" value={country} onChange={ (e) => setCountry(e.target.value) }>
                    <option value="" disabled>Select an option</option>
                    <option value="Shqiperi" > Shqiperi</option>
                    <option value="USA" > USA</option>
                    <option value="Germany" >Germany</option>
                </select>
            </label><br/>

            <label htmlFor="">
                Monthly Income: { countryCurrecies[country] }
                <input type="number" className="w-24 bg-[#1f1f1f] placeholder-white border-black pl-2" value={income} placeholder='0'
                    onChange={ (e) => setIncome(Number(e.target.value)) }
                />
            </label>

            <ExpenseTracker 
                onExpensesChange={ handleExpensesChange } 
                country={ country }
                currency={ countryCurrecies[country] }
            />

            <button className='bg-none border border-green-700  w- rounded-md text-xl px-2 transition hover:bg-green-700 hover:ease-in-out hover:delay-100'
                    onClick={calculateProfit}>
                    Calculate Profit
            </button>
            
            <div>Your Profit per Month is: { countryCurrecies[country] } 
                <span className="pl-2">{ profit }</span>
            </div>
        </div>
    );
}

export default Profit;