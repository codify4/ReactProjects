import React, { useState } from 'react';

const ExpenseTracker = ( { onExpensesChange, country, currency }) => {

    const [expenses, setExpenses] = useState();
    const [housing, setHousing] = useState();
    const [food, setFood] = useState();
    const [transportation, setTransportation] = useState();
    const [healthcare, setHealthcare] = useState();

    currency = {
        Shqiperi: "Lek",
        USA: "$",
        Germany: "€",
    }

    const calculateExpenses = (event) => {
        event.preventDefault();

        let expenses = Number(housing) + Number(food) + Number(transportation) + Number(healthcare);

        setExpenses(expenses);
        onExpensesChange(expenses);
    }

    return (
        <div className='flex flex-col justify-center text-start m-2 border rounded-lg p-4 gap-2 hover:ring-1 hover:ring-white hover:ease-in-out hover:delay-100'>
            <form onSubmit={calculateExpenses} className='pl-11'>
                <div  className='mb-1'>
                    <label htmlFor="housing">Housing: <span className='pr-1'>{currency[country]}</span>
                        <input className='w-24 bg-[#1f1f1f] placeholder-white' 
                            type="number" 
                            value={housing} 
                            placeholder='0'
                            onChange={ (e) => setHousing(e.target.value) }
                        />
                    </label>
                    
                </div>

                <div className='mb-1'>
                    <label htmlFor="food">Food: <span className='pr-1'>{currency[country]}</span>
                        <input  className='w-24 bg-[#1f1f1f] placeholder-white'
                                type="number" 
                                value={food} 
                                placeholder='0'
                                onChange={ (e) => setFood(e.target.value) }
                        />
                    </label>
                    
                </div>

                <div className='mb-1'>
                    <label htmlFor="transportation">Transportation: <span className='pr-1'>{currency[country]}</span>  
                        <input  className='w-24  bg-[#1f1f1f] placeholder-white' 
                                type="number" 
                                value={transportation} 
                                placeholder='0'
                                onChange={ (e) => setTransportation(e.target.value) }
                        />
                    </label>
                    
                </div>

                <div className='mb-1'>
                    <label htmlFor="healthcare">Healthcare: <span className='pr-1'>{currency[country]}</span> 
                        <input  className='w-24  bg-[#1f1f1f] placeholder-white' 
                                type="number" 
                                value={healthcare} 
                                placeholder='0'
                                onChange={ (e) => setHealthcare(e.target.value) }
                        />
                    </label>
                </div>

                <button className='text-center bg-none border border-green-700  w- rounded-md text-xl px-2 transition hover:bg-green-700 hover:ease-in-out hover:delay-100'
                    type='submit'>
                    Calculate Expenses
                </button>
            </form>

            <div>Your Expenses per Month are: <span className='pr-1'>{currency[country]}</span> {expenses}</div>
        </div>
    );
}

export default ExpenseTracker;