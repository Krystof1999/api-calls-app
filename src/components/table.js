import React from "react";
import Row from "./row";

const Table = ({ data }) => {
  return (
    <div className="table-container">
      <table>
        <tbody>
          {data.map((item) => (
            <Row key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
