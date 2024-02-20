import React from "react";

export const Header = ({ isLogin }) => {
  return (
    <>
      <header>
        <a href="/filter">Filter</a>
        <a href="/login">Login</a>
        {isLogin ? <a href="/main">Main</a> : null}
      </header>
    </>
  );
};
