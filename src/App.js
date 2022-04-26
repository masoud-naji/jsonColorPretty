import "./styles.css";
import MockDocument from "./Components/MockDocument.json";
import UseJsonPretteir from "./Components/useJsonPretteir";

export default function App() {
  return (
    <div className="App">
      <h1>JSON pretty</h1>
      <h2>show json files pretty</h2>
      <UseJsonPretteir MockDocument={MockDocument} />
    </div>
  );
}
