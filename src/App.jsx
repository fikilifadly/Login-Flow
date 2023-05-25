import Reset from "./pages/Reset";

let count = 0;
function App() {
  count++;
  return (
    <>
      {count}
      <Reset />
    </>
  );
}

export default App;
