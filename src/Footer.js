import React from "react";

const Footer = ({ length }) => {
  const date = new Date();
  return (
    <footer>
      <h2>
        {length} List {length === 1 ? "Item" : "Items"}
      </h2>
      <h2>Copyright &copy; {date.getFullYear()}</h2>
    </footer>
  );
};

export default Footer;
