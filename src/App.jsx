import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./router";
import Fab from "./components/Fab";

function App() {
  return (
    <Router>
      <AppRoutes />
      <Fab />
    </Router>
  );
}

export default App;