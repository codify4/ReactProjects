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
        <div className='flex flex-col justify-center text-center m-2 bg-[#171717] rounded-lg p-4 gap-2 shadow-xl'>
            <form onSubmit={calculateExpenses} className='pl-11'>
                <div  className='mb-1'>
                    <label htmlFor="housing">Housing: <span className='pr-1'>{currency[country]}</span>
                        <input className='w-24 bg-[#171717] placeholder-white' 
                            type="number" 
                            value={housing} 
                            placeholder='0'
                            onChange={ (e) => setHousing(e.target.value) }
                        />
                    </label>
                    
                </div>

                <div className='mb-1'>
                    <label htmlFor="food">Food: <span className='pr-1'>{currency[country]}</span>
                        <input  className='w-24 bg-[#171717] placeholder-white'
                                type="number" 
                                value={food} 
                                placeholder='0'
                                onChange={ (e) => setFood(e.target.value) }
                        />
                    </label>
                    
                </div>

                <div className='mb-1'>
                    <label htmlFor="transportation">Transportation: <span className='pr-1'>{currency[country]}</span>  
                        <input  className='w-24  bg-[#171717] placeholder-white' 
                                type="number" 
                                value={transportation} 
                                placeholder='0'
                                onChange={ (e) => setTransportation(e.target.value) }
                        />
                    </label>
                    
                </div>

                <div className='mb-1'>
                    <label htmlFor="healthcare">Healthcare: <span className='pr-1'>{currency[country]}</span> 
                        <input  className='w-24  bg-[#171717] placeholder-white' 
                                type="number" 
                                value={healthcare} 
                                placeholder='0'
                                onChange={ (e) => setHealthcare(e.target.value) }
                        />
                    </label>
                </div>

                <div className='mr-10'>
                    <button className='text-center bg-none border border-green-700  w- rounded-md text-xl px-2 transition hover:bg-gradient-to-r hover:from-green-600 hover:via-green-700 hover:to-green-800 hover:ease-in-out hover:delay-100'
                        type='submit'>
                        Calculate Expenses
                    </button>
                </div>
            </form>

            <div className='text-center'>Your Expenses per Month are: <br/><span className='pr-1'>{currency[country]}</span> {expenses}</div>
        </div>
    );
}

export default ExpenseTracker;