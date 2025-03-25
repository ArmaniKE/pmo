import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import AppRoutes from "./router";
import Fab from "./components/Fab";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <AppRoutes />
        </main>
        <Fab/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;