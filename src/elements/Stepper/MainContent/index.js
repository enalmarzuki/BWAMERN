import React from "react";
import Fade from "react-reveal/Fade";

export default function MainContent({ data, current }) {
  console.log("MAIN CONTENT data", data);
  console.log("MAIN CONTENT current", current);

  return <Fade>{data[current] && data[current].content}</Fade>;
}
