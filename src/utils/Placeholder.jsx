import React from "react";

const Placeholder = () => {
  const arr = new Array(10).fill(0);

  return (
    <div className="row">
      {arr.map((el, i) => (
        <div key={i}>
          <div className="skeleton-image"></div>
          <p
            className="skeleton-title"
            style={{ paddingTop: 3, marginTop: 10 }}
          ></p>
        </div>
      ))}
    </div>
  );
};

export default Placeholder;
