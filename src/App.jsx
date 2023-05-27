import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reset from "./pages/Reset";
import Container from "./components/Container";
import Hoc from "./components/Hoc";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Container>
          <Hoc>
            <Routes>
              <Route>
                <Route path="/" element={<Login />} />
                <Route path="/reset" element={<Reset />} />
                <Route path="/signup" element={<SignUp />} />
              </Route>
            </Routes>
          </Hoc>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
