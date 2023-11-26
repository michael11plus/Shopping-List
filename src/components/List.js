import React, { useState } from "react";
import "../App.css";

const ShoppingManager = () => {
  const [itemInput, setItemInput] = useState("");
  const [shoppingItems, setShoppingItems] = useState([]);

  const [editMode, setEditMode] = useState(false);
  const [shoppingListTitle, setShoppingListTitle] = useState('');
  const [titleChangeFlag, setTitleChangeFlag] = useState(false);

  const [selectedItem, setSelectedItem] = useState(-1);
  const [editedText, setEditedText] = useState("");

  function handleAddItem() {
    if (!itemInput) {
      alert("Please enter an item.");
      return;
    }

    const newItem = {
      id: Math.floor(Math.random() * 1000),
      name: itemInput,
    };

    setShoppingItems((prevItems) => [...prevItems, newItem]);
    setItemInput("");
  }

  function handleDeleteItem(id) {
    const filteredItems = shoppingItems.filter((item) => item.id !== id);
    setShoppingItems(filteredItems);
  }

  function handleEditItem(id, newContent) {
    const updatedItems = shoppingItems.map(item => 
      item.id === id ? { ...item, name: newContent } : item
    );
    setShoppingItems(updatedItems);
    setEditedText("");
    setSelectedItem(-1);
  }

  const onTitleInputChange = (event) => {
    setShoppingListTitle(event.target.value);
  } 

  const toggleEditMode = () => {
    setTitleChangeFlag(!titleChangeFlag);
  }

  const handleTitleChange = (event) => {
    event.preventDefault();
    if(titleChangeFlag){
        setShoppingListTitle(editMode);
        setTitleChangeFlag(false);
    }
  }

  return (
    <div className="shopping-app-container">
      <div className="shopping-list-header">
        { !titleChangeFlag && <h1 className="shopping-list-title">{shoppingListTitle ? shoppingListTitle : "My List"}</h1>}
        { !titleChangeFlag && <button className="shopping-action-button" onClick={toggleEditMode}></button> }
        { titleChangeFlag && 
          <form onSubmit={handleTitleChange} className="shopping-title-form">
            <input
              type="text"
              value={shoppingListTitle}
              onChange={onTitleInputChange}
              placeholder="Enter new list title..."
              className="shopping-input"
            />
            <button className="shopping-action-button" type="submit">
              Submit
            </button>
          </form>
        }
      </div>
      <div className="shopping-input-section">
        <input
          type="text"
          placeholder="Add a new item..."
          value={itemInput}
          onChange={(e) => setItemInput(e.target.value)}
          className="shopping-input"
        />
        <button className="shopping-action-button" onClick={handleAddItem}> + </button>
      </div>
      <ul className="shopping-items-list">
        {shoppingItems.map((item) => (
          <div key={item.id}>
            <li onClick={() => setSelectedItem(item.id)}>
              {item.name}
              <button
                className="shopping-action-button"
                onClick={() => handleDeleteItem(item.id)}
              >
                Delete
              </button>
            </li>

            {selectedItem === item.id && (
              <div className="shopping-item-edit-section">
                <input
                  type="text"
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                  className="shopping-input"
                />
                <button onClick={() => handleEditItem(item.id, editedText)} className="shopping-action-button">
                  Update
                </button>
              </div>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingManager;