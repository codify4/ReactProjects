import React, { useState } from 'react';

const ExpenseTracker = () => {

    const [expenses, setExpenses] = useState(0);
    const [housing, setHousing] = useState(0);
    const [food, setFood] = useState(0);
    const [transportation, setTransportation] = useState(0);
    const [healthcare, setHealthcare] = useState(0);

    const calculateExpenses = (event) => {
        event.preventDefault();

        let expenses = Number(housing) + Number(food) + Number(transportation) + Number(healthcare);

        setExpenses(expenses);
    }

    return (
        <div className='flex flex-col justify-center content-center space-y-3'>
            <form onSubmit={calculateExpenses}>
                <div>
                    <label htmlFor="housing">Housing: $  
                        <input className='w-24' type="number" value={housing}
                            onChange={ (e) => setHousing(e.target.value) }
                        />
                    </label>
                    
                </div>

                <div>
                    <label htmlFor="food">Food: $  
                        <input className='w-24' type="number" value={food}
                        onChange={ (e) => setFood(e.target.value) }
                    />
                    </label>
                    
                </div>

                <div>
                    <label htmlFor="transportation">Transportation: $  
                        <input className='w-24' type="number" value={transportation}
                            onChange={ (e) => setTransportation(e.target.value) }
                        />
                    </label>
                    
                </div>

                <div>
                    <label htmlFor="healthcare">Healthcare: $  
                        <input className='w-24' type="number" value={healthcare}
                            onChange={ (e) => setHealthcare(e.target.value) }
                        />
                    </label>
                    
                </div>

                <button 
                    className='bg-green-600 hover:bg-green-500 w-24 
                    rounded text-xl'
                    type='submit'>
                    Calculate
                </button>
            </form>

            <div>Your Expenses per Month are: ${expenses}</div>
        </div>
    );
}

export default ExpenseTracker;