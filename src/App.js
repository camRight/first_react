import Nav from "./Components/Nav/Nav/Nav";
import LeftSection from "./Components/LeftSection/LeftSection";
import Button from "./Components/Button/Button";
import Counter from "./Components/Counter/Counter";

function App() {
  return (
    <div className="App">
      <Nav />
      <LeftSection />
      <Button color="danger" text="Delete" />
      <Button color="success" text="Submit" />

      <Counter />
    </div>
  );
}

export default App;
