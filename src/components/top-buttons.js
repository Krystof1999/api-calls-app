import React from "react";

const TopButtons = ({
  handleClickUsers,
  handleClickPosts,
  handleClickComments,
  handleClick,
  btnIndex,
}) => {
  return (
    <div className="topButtons">
      <button
        onClick={() =>
          handleClick("https://jsonplaceholder.typicode.com/users", 1)
        }
        style={{
          backgroundColor: btnIndex === 1 ? "black" : "white",
          color: btnIndex === 1 ? "white" : "black",
        }}
      >
        users
      </button>
      <button
        onClick={() =>
          handleClick("https://jsonplaceholder.typicode.com/posts", 2)
        }
        style={{
          backgroundColor: btnIndex === 2 ? "black" : "white",
          color: btnIndex === 2 ? "white" : "black",
        }}
      >
        posts
      </button>
      <button
        onClick={() =>
          handleClick("https://jsonplaceholder.typicode.com/comments", 3)
        }
        style={{
          backgroundColor: btnIndex === 3 ? "black" : "white",
          color: btnIndex === 3 ? "white" : "black",
        }}
      >
        comments
      </button>
    </div>
  );
};

export default TopButtons;
