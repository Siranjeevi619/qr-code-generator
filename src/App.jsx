import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import QrGenerator from "./components/QrGenerator.jsx";
import NavBar from "./components/NavBar.jsx";
import HomePage from "./pages/HomePage.jsx";

function App() {
  // const [count, setCount] = useState(0);/

  return (
    <>
      {/* <QrGenerator /> */}
      {/* <NavBar /> */}
      <HomePage />
    </>
  );
}

export default App;
