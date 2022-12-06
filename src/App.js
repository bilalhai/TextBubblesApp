// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextFrom from "./components/TextFrom";
import { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  // ! using state to display the alert box and its message and message type
  //!h=show alert is the funciton

  const [alert, setAlert] = useState(" ");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      showAlert();
    }, 5000);
  };

  // !!btn for enabling the dark mode and light mode function name toggleMode

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#075e54";
      showAlert("!dark mode is enable ", "success");
      document.title = "Text Bubble- Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("!light mode is enable ", "success");
      document.title = "Text Bubble- Light Mode";
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="Text Bubbles App"
          aboutHeading="About Us!"
          mode={mode}
          toggleMode={toggleMode}
        />

        <Alert alert={alert} />
        <div className="container my-4">
          <Switch>
            <Route path="/about">
              <About />
            </Route>

            <Route path="/">
              <TextFrom
                showAlert={showAlert}
                heading="Enter The Text Here To Analyze"
                mode={mode}
              />
            </Route>
          </Switch>

          {/* <About abouttext="About Us" /> */}
        </div>
      </Router>
    </>
  );
}
// import { Form } from "react-router-dom";

export default App;
