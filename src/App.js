import logo from "./logo.svg";
import "./App.css";
import TicTacToeBoard from "./components/TicTacToeBoard";

function App() {
  return (
    <div className="min-h-screen bg-slate-600 flex justify-center items-center">
      <TicTacToeBoard />
    </div>
  );
}

export default App;
