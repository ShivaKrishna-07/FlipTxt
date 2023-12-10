import React, { useState } from "react";

function Textform(props) {
  const [text, setText] = useState("");
  // setText("write anything");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };

  const handlelowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };

  const handleCopy = () => {
    let text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    document.getSelection().removeAllRanges();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clip board", "success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Text cleared", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div
        className="container my-4"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <div className="mb-3">
          <h1>Enter a Text to analyze below</h1>
          <textarea
            value={text}
            onChange={handleOnChange}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="10"
            style={{
              backgroundColor: props.mode === "dark" ? "black" : "white",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          type="button"
          onClick={handleUpClick}
          className="btn btn-primary mx-1 "
        >
          Change to upper case
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          onClick={handlelowClick}
          className="btn btn-primary mx-1"
        >
          Change to lower case
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          onClick={handleCopy}
          className="btn btn-primary mx-1"
        >
          Copy text
        </button>

        <button
          disabled={text.length === 0}
          type="button"
          onClick={handleExtraSpaces}
          className="btn btn-primary mx-1"
        >
          Clear Extra spaces
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          onClick={handleClearClick}
          className="btn btn-primary mx-1"
        >
          Clear text
        </button>
      </div>

      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h3>Your Text Summary</h3>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {text.length > 0 ? 0.008 * text.split(" ").length : 0} Minutes to read
        </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}

export default Textform;
