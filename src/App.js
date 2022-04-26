import "./styles.css";
import MockDocument from "./Components/MockDocument.json";
import UseJsonPretteir from "./Components/useJsonPretteir";

export default function App() {
  return (
    <div className="App">
      <h1>JSON pretty</h1>
      <h2>show json files pretty</h2>
      <UseJsonPretteir
        prettyjson={MockDocument}
        preBcl="white"
        stringCl="green"
        numberCl="darkorange"
        booleanCl="blue"
        nullCl="magenta"
        keyCl="red"
        string_font_size="1rem"
        number_font_size="1rem"
        boolean_font_size="1rem"
        null_font_size="1rem"
        key_font_size="1.2rem"
      />
    </div>
  );
}
