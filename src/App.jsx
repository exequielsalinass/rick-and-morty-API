import Home from "./page/Home";
import { ApiProvider } from "./context/ApiProvider";

function App() {
  return (
    <ApiProvider>
      <Home />
    </ApiProvider>
  );
}

export default App;
