import React from "react";

const SearchItem = ({ search, setSearch }) => {
  return (
    <form
      className="searchForm"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label htmlFor="search"> Search</label>
      <input
        id="search"
        type="text"
        placeholder="Search Items"
        role="searchbox"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      ></input>
    </form>
  );
};

export default SearchItem;
