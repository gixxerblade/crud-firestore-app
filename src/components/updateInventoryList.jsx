import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { FaWindowClose } from "react-icons/fa"

import firebase from "firebase"
const UpdateInventoryList = ({ updateItem, setEditing, currentItem }) => {
  const [item, setItem] = useState(currentItem)

  console.log("It passes the value from currentItem to the item:", {item})

  useEffect(() => {
    setItem(currentItem)
    console.log("useEffect passes the currentItem: ", currentItem)
  }, [currentItem])

  const handleInputChange = event => {
    const { item, value } = event.target
    setItem({ ...item, item: value })
    console.log(item)
  }
  const onSubmit = e => {
    e.preventDefault()
    console.log("Before ONSUBMIT it passes the id and item",  { item })
    updateItem({currentItem}, item)
    console.log("After ONSUBMIT it passes the id and item", { item })
  }
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="Update Item">Update Item: </label>
      <StorageInput
        onChange={e => setItem(e.currentTarget.value)}
        value={item.item}
        placeholder="e.g. Cupboard"
      />
      <StorageBtn /* onClick={updateItem(item)} */>Update</StorageBtn>
      <FaWindowClose
        size="20px"
        onClick={() => setEditing(false)}
      ></FaWindowClose>
    </form>
  )
}

export default UpdateInventoryList

const StorageBtn = styled.button`
  font-size: 16px;
  width: 80px;
  padding: 6px;
  border-radius: 5px;
  font-weight: bold;
  font-family: "Poppins";
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
    background: #81c3d7;
  }
  &:active {
    background: #ffff22;
  }
`
