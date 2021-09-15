import { useEffect, useState } from "react";
import qs from "qs";
import { useLocation } from "react-router-dom";
import {
  Button,
  CircularProgress,
  FilledInput,
  Typography,
} from "@material-ui/core";
import logo from "./lotterylogo.png";
import "./App.css";
import ConfettiLayer from "./ConfettiLayer";
import useNumbers from "./useNumbers";
function App() {
  const {
    num = "5",
    load = "1200",
    powerball = "yellow",
  } = qs.parse(useLocation().search, { ignoreQueryPrefix: true });
  const [confetti, setConfetti] = useState(false);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setLoading(false);
        setConfetti(true);
      }, Number(load));
    }
  }, [isLoading, setLoading, setConfetti, load]);
  const { handleChange, numbers } = useNumbers(Number(num));
  return (
    <div className="App">
      {confetti && <ConfettiLayer />}
      <div className="container">
        {" "}
        <img src={logo} alt="lottery logo" />
        <Typography variant="h1">State Lottery</Typography>
        {confetti ? (
          <Typography variant="h5" color="secondary">
            You're a winner!{" "}
          </Typography>
        ) : (
          <Typography variant="h5">
            Are you a winner?<span>&trade;</span>
          </Typography>
        )}
        <form autoComplete="off" className="flex">
          {(Object.keys(numbers) || []).sort().map((k) => (
            <FilledInput
              // className="input"
              autoComplete={"off"}
              key={k}
              disabled={confetti}
              value={numbers[k]}
              name={k}
              variant="filled"
              margin="dense"
              onChange={handleChange}
              disableUnderline={true}
              inputProps={{
                maxLength: 2,
                autoComplete: "new-password",
                form: {
                  autoComplete: "off",
                },
                style: {
                  textAlign: "center",
                  marginTop: "0",
                  paddingTop: "15px",
                  paddingBottom: "15px",
                  marginBottom: "0px",
                },
              }}
              classes={{ root: "input" }}
              style={
                k.includes(num) ? { backgroundColor: powerball } : undefined
              }
            />
          ))}
        </form>
        {!isLoading && !confetti && (
          <Button variant="contained" onClick={() => setLoading((p) => !p)}>
            Check Your Numbers
          </Button>
        )}
        {isLoading && <CircularProgress />}
        {confetti && (
          <Typography variant="h1" color="secondary">
            $8,000,000
          </Typography>
        )}
      </div>
    </div>
  );
}

export default App;
