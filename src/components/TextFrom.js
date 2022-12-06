import React, { useState } from "react";

export default function TextFrom(props) {
  let mystyle = {
    color: "	#00c7aa",
  };

  const handleUpClick = () => {
    // console.log("upper case was clicked" + text);
    let newtext = text.toUpperCase();
    settext(newtext);
    props.showAlert("  text converted to Upper Case", "success");
  };

  // !lower case function
  const handleLoClick = () => {
    let newtext = text.toLowerCase();
    settext(newtext);
    props.showAlert("  text converted to Lower Case", "success");
  };

  // !to clear the text function
  const handleClearClick = () => {
    let newtext = "";
    settext(newtext);
  };

  // !on change function to change the text are text
  const handleOnChange = (event) => {
    // console.log("onchange clicked");
    settext(event.target.value);
  };

  // !to copy the text function
  const handleOnCopy = () => {
    // console.log("i am copy");
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  // !remove extra spaces function rigix
  const handleExtraSpaces = () => {
    let newtext = text.split(/[ ]+/);
    settext(newtext.join(" "));
  };
  //!to print the text use this function

  const handlePrnintClick = () => {
    var text = document.getElementById("mybox").innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = text;
    window.print();
    document.body.innerHTML = originalContents;
    // window.open();
  };
  //! to captilize the first word of word
  const handleFirstLetterUppercase = () => {
    function capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
    const upper = text.split(" ").map(capitalize).join(" ");
    settext(upper);
  };

  //!Listen The Audio
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  const [text, settext] = useState("");

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            spellCheck="true"
            id="mybox"
            rows="8"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#075e54" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>

        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleUpClick}
        >
          Convert To UpperCase
        </button>

        <button
          type="button"
          className="btn btn-success mx-2"
          onClick={handleLoClick}
        >
          Convert To LowerCase
        </button>

        <button
          type="button"
          className="btn btn-danger mx-2"
          onClick={handleClearClick}
        >
          Clear Text
        </button>

        <button
          type="button"
          className="btn btn-info mx-2"
          onClick={handleOnCopy}
        >
          Copy Text
        </button>

        <button
          type="button"
          className="btn btn-warning mx-2"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>

        <button
          type="button"
          className="btn btn-info mx-2"
          onClick={handlePrnintClick}
        >
          Print
        </button>

        <button type="button" className="btn btn-success mx-2" onClick={speak}>
          Listen Auido
        </button>

        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleFirstLetterUppercase}
        >
          Cap First Word
        </button>
      </div>

      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>your text summery here</h2>
        {/* check the length of the words formula */}
        <p>
          {text.split(" ").length} words and {text.length} Charcter
        </p>

        {/* time to read the text formula */}
        <p style={mystyle}>
          {0.008 * text.split(" ").length} Mintues To Read This
        </p>

        {/* !preview the text here */}
        <h3>Review The Text Here!!</h3>
        <p style={mystyle}>
          {text.length > 0 ? text : "Enter Some Text To Preview It here"}
        </p>
      </div>
    </>
  );
}
