import React from "react";

const Content = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <li>{JSON.stringify(item)}</li>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Content;
