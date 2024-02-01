import React, { useState } from 'react';

const ExpenseTracker = ( { onExpensesChange }) => {

    const [expenses, setExpenses] = useState();
    const [housing, setHousing] = useState();
    const [food, setFood] = useState();
    const [transportation, setTransportation] = useState();
    const [healthcare, setHealthcare] = useState();

    const calculateExpenses = (event) => {
        event.preventDefault();

        let expenses = Number(housing) + Number(food) + Number(transportation) + Number(healthcare);

        setExpenses(expenses);
        onExpensesChange(expenses);
    }

    return (
        <div className='flex flex-col justify-center content-center space-y-3'>
            <form onSubmit={calculateExpenses}>
                <div>
                    <label htmlFor="housing">Housing: $  
                        <input className='w-24 placeholder-black' 
                            type="number" 
                            value={housing} 
                            placeholder='0'
                            onChange={ (e) => setHousing(e.target.value) }
                        />
                    </label>
                    
                </div>

                <div>
                    <label htmlFor="food">Food: $  
                        <input  className='w-24 placeholder-black'
                                type="number" 
                                value={food} 
                                placeholder='0'
                                onChange={ (e) => setFood(e.target.value) }
                        />
                    </label>
                    
                </div>

                <div>
                    <label htmlFor="transportation">Transportation: $  
                        <input  className='w-24 placeholder-black' 
                                type="number" 
                                value={transportation} 
                                placeholder='0'
                                onChange={ (e) => setTransportation(e.target.value) }
                        />
                    </label>
                    
                </div>

                <div>
                    <label htmlFor="healthcare">Healthcare: $  
                        <input  className='w-24 placeholder-black' 
                                type="number" 
                                value={healthcare} 
                                placeholder='0'
                                onChange={ (e) => setHealthcare(e.target.value) }
                        />
                    </label>
                </div>

                <button className='bg-green-600 hover:bg-green-500 w-
                    rounded text-xl px-2'
                    type='submit'>
                    Calculate Expenses
                </button>
            </form>

            <div>Your Expenses per Month are: ${expenses}</div>
        </div>
    );
}

export default ExpenseTracker;