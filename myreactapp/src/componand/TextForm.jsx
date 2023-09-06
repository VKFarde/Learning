import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("Enter text Here");

  const handleClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    let newText = "Enter text Here";
    setText(newText);
  };

  const handleCamelClick = () => {
    let arr = text.split(" ");
    let ans = "";
    for (let i = 0; i < arr.length; i++) {
      if (ans.length > 0) {
        ans += " ";
      }
      ans += arr[i][0].toUpperCase();
      for (let j = 1; j < arr[i].length; j++) {
        if (arr[i][j] === " ") {
          ans += " ";
          ans += arr[i][j + 1].toUpperCase();
          j++;
        } else {
          ans += arr[i][j].toLowerCase();
        }
      }
    }
    return ans;
  };

  // Calculate word count, reading time, and preview text
  const words = text.split(" ").filter((word) => word !== "");
  const wordCount = words.length;
  const charCount = text.replace(/\s/g, "").length;
  const readingTime = Math.ceil(0.008 * wordCount);
  const previewText = text.toLowerCase();

  return (
    <div>
      <div className="mb-3 my-3">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          value={text}
          id="myBox"
          rows="8"
          onChange={(event) => setText(event.target.value)}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-3" onClick={handleClick}>
        Convert to UPPER CASE
      </button>
      <button className="btn btn-primary mx-3" onClick={handleLowerClick}>
        Convert to lower case
      </button>
      <button className="btn btn-primary mx-3" onClick={handleCamelClick}>
        Convert to Camel Case
      </button>
      <button className="btn btn-primary mx-3" onClick={handleClearClick}>
        Clear
      </button>

      <div className="container my-3">
        <h1>Text Summary</h1>
        <p>
          {wordCount} {wordCount === 1 ? "word" : "words"}, {charCount}{" "}
          characters
        </p>
        <p>{readingTime} minute(s) to read</p>
        <h1>Preview</h1>
        <p>{previewText}</p>
      </div>
    </div>
  );
}

export default TextForm;
