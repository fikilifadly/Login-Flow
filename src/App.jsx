import { BrowserRouter, Route } from "react-router-dom";
import Reset from "./pages/Reset";
import Container from "./components/Container";

let count = 0;
function App() {
  count++;
  return (
    <>
      <BrowserRouter>
        <Container>
          <Reset />
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
