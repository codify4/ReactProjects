import Profit from "./Profit"

export default function App() {
  return (
    <div className="flex flex-col ml-3">
      <h1 className="text-4xl font-bold font-sans"><span className="text-green-700 ">Expense</span> Tracker</h1>
      
      <Profit />
    </div>
  )
}