import React from "react";
import { useRef } from "react";

const AddItem = ({ newItem, setNewItem, handleAdd }) => {
  const inputRef = useRef();
  return (
    <form className="addForm" onSubmit={handleAdd}>
      <label htmlFor="addItem">Add item</label>
      <input
        autoFocus
        id="addItem"
        ref={inputRef}
        type="text"
        placeholder="Add Item"
        value={newItem}
        onChange={(e) => {
          setNewItem(e.target.value);
        }}
        required
      ></input>
      <button type="submit" onClick={() => inputRef.current.focus()}>
        Add
      </button>
    </form>
  );
};

export default AddItem;
