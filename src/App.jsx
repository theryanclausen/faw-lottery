import { Button } from "@material-ui/core";
import { useState } from "react";
import logo from "./lotterylogo.png";
import "./App.css";
import ConfettiLayer from "./ConfettiLayer";

function App() {
  const [confetti, setConfetti] = useState(false);
  const [isLoading, setLoading] = useState(false);

  return (
    <div className="App">
      {confetti && <ConfettiLayer />}
      <div className="container">
        {" "}
        <img src={logo} alt="lottery logo" />
        <Button variant="contained" onClick={() => setConfetti((p) => !p)}>
          Check Your Numbers
        </Button>
      </div>
    </div>
  );
}

export default App;
