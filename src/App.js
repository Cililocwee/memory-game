import "./App.css";
import CardWrapper from "./components/CardWrapper";
import MemoryCard from "./components/MemoryCard";

function App() {
  return (
    <div className="App">
      {/* <MemoryCard idSpec="BillyBob" />
      <MemoryCard />
      <MemoryCard />
      <MemoryCard /> */}
      <CardWrapper cardNumber="9" />
    </div>
  );
}

export default App;
