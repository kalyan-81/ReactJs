import "./App.css";
import StyledButton, {
  FancyButton,
  SubmitButton,
} from "./components/Button/button";

function App() {
  return (
    <div className="App">
      <button>UnStyled Button</button>
      <div>
        <br />
      </div>
      <StyledButton>Styled Button</StyledButton>
      <div>
        <br />
      </div>
      <StyledButton variant="outlined">Styled Button</StyledButton>
      <div>
        <br />
      </div>
      <FancyButton as={"a"}>Fancy Button</FancyButton>
      <div>
        <br />
      </div>
      <SubmitButton>SubmitButton</SubmitButton>
    </div>
  );
}
export default App;
