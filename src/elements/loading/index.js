import React from "react";
import Loading from "assets/images/icons/loading.gif";

export default function index() {
  return (
    <div>
      <img
        src={Loading}
        alt="loading"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
