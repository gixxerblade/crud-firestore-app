import React, { useState } from "react"
import styled from "styled-components"
import firebase from "firebase"
const InventoryForm = () => {
  const [item, setItem] = useState([])
  const onSubmit = e => {
    e.preventDefault()
    firebase
      .firestore()
      .collection("storageSource")
      .add({ item })
      .then(() => setItem(""))
    console.log({ item })
  }

  return (
    <form onSubmit={onSubmit} action="">
      <label htmlFor="Add Inventory Item">Enter Item: </label>
      <StorageInput
        placeholder="e.g. Cupboard"
        type="text"
        name="item"
        onChange={e => setItem(e.currentTarget.value) }
        value={item}
      />
      <StorageButton disabled={!item} className="add-item-btn">Add Item</StorageButton>
    </form>
  )
}

export default InventoryForm

const StorageInput = styled.input`
  background-color: white;
  width: 200px;
  color: rgb(0, 0, 0);
  font-size: 16px;
  font-family: "Poppins";
  border-radius: 5px;
  font-weight: bold;
  text-decoration: none;
  margin-left: 10px;
  &:hover {
    background: #ffffff;
  }
  &:active {
    background: #ffff22;
  }
`
const StorageButton = styled.button`
font-size: 16px;
width: 90px;
padding: 6px;
border-radius: 5px;
font-weight: bold;
font-family: 'Poppins';
text-decoration: none;
margin-left: 3px;
text-align: center;
margin: 20px;
&:hover {
  background: #81c3d7;
}
&:active {
  background: #ffff22;
}

`
