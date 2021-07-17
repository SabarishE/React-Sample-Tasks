import "./styles.css";

import { Sidenav } from "./components/sidenav";
import { useState } from "react";
import { Rightside } from "./components/rightside";

import { BrowserRouter as Router } from "react-router-dom";

// ----------Context creation-----------

import { navDrawer } from "./components/context";

export default function App() {
  const [side, setside] = useState(true);

  function showside() {
    setside(!side);
  }
  return (
    <>
      <div className="App">
        <Router>
          <navDrawer.Provider value={{ side, showside }}>
            <Sidenav />
            <Rightside />
          </navDrawer.Provider>
        </Router>
      </div>
    </>
  );
}
