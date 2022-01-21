import "./styles.css";
import Calculator from "./Components/Calculator";
import styled from "styled-components";

function App() {
  return (
    <Front>
      <div className="App">
        <h1>Calculator App</h1>
        <Calculator />
      </div>
    </Front>
  );
}
const Front = styled.div`
  .App {
    margin-top: 4%;
  }
`;
export default App;
