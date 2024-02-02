import Profit from "./Profit"

export default function App() {
  return (
    <div className="h-screen flex flex-col items-center ml-3">
      <h1 className="flex text-6xl font-bold font-sans m-6 p-3">
        <span className="text-green-700 mr-3">Expense</span> 
        Tracker
      </h1>
      
      <Profit />
    </div>
  )
}