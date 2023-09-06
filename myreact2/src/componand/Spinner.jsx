import React from "react";
import { BeatLoader } from "react-spinners";

function Spinner() {
  return (
    <div>
      <h1>Loading...</h1>
      <BeatLoader color="blue" />
    </div>
  );
}

export default Spinner;
