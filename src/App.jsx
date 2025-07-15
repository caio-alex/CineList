import { Outlet } from "react-router-dom"; 
import './App.css'; 
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeProvider>
    <div className="App">
        <NavBar />
        <Outlet /> 
        <Footer />
    </div>
    </ThemeProvider>
  );
}

export default App;