import React from "react";

import "../../scrollbarContainer.css";

const Scrollbar = props => {
  const { contentWidth, wrapperWidth, wrapperHeight, children } = props;
  return (
    <div
      class="scrollbar custom-scrollbar"
      style={{
        width: wrapperWidth || "100%",
        height: wrapperHeight || "100%",
        scrollX: contentWidth ? "scroll" : "hidden"
      }}
    >
      <div style={{ width: contentWidth || "auto" }}>{children}</div>
    </div>
  );
};

export default Scrollbar;
