import React, { useState } from "react"
import Layout from "../components/layout"
import InventoryList from "../components/inventoryList"
import InventoryForm from "../components/inventoryForm"
import "../styles/global.css"
import UpdateInventoryList from "../components/updateInventoryList"
import GlobalFonts from "../fonts/fonts"
import firebase from "firebase"

//import { graphql } from "gatsby"
//import app from "../components/firebase"
//import EditStorageForm from "../components/EditStorageForm"
const Home = () => {
  /*
   ************************************************
   *****CRUD app to help organize cabinet**********
   *****space in your pantry or other storage******
   *****space**************************************
   ************************************************
   */

  /* 
  Create initial empty set for the <StorageAreas></StorageAreas>
  */
  /* 
  Initial state of storage = initialStorageState
  */
  const initialItemState = [{ id: null, item: "" }]
  /* 
  CRUD Operations
  */
  /* 
  Delete storage
  Located in a reusable function named deleteStorage(id, collection) 
  where a collection and id are passed. 
  */

  /* 
  Make state for whether or not edit mode is turned on.
  It will begin as false.
  */
  const [editing, setEditing] = useState(false)

  /* 
  Apply the empty initialItemState { id: null, item: "" } 
  from above to a currentItem state. currentItem will be 
  used for editing individual items
  */
  const [currentItem, setCurrentItem] = useState(initialItemState)

  /*   
  Edit storage:
  When Edit is selected on a storage item,
  it should turn on edit mode,
  and set the current item state to edit,
  which we'll do in this editItem function.
  Pass this function to <UpdateInventoryList /> form 
  */
  const editItem = item => {
    console.log("It passes the current id/item in update item field", item) //It passes the current id/item in update item field
    setEditing(true)
    setCurrentItem({
      id: item.id,
      item: item.item,
    })
    console.log("It passes the value passed to the currentItem", currentItem)
  }
  /* 
  When Edit is selected on a storage item, 
  it should turn on edit mode, and set the current item
  */

  /* upstateStorage function - Function that will get called when the edit form is submitted.
     Maps through the array, and update the item that matches the ID 
     passed through. Take's two parameters - the updated item object, and 
     the id. Then use a ternary operation to map through the items and 
     find the one to update.
   */
  const updateItem = ({ currentItem }, updatedItem) => {
    console.log(
      "It send the item to the updated item function:",
      updatedItem,
      currentItem.id
    )
    firebase
      .firestore()
      .collection("storageSource")
      .doc(currentItem.id)
      .update({ item: updatedItem })
  }

  return (
    <Layout>
      <GlobalFonts />
      <h2>Home</h2>
      <h3>My storage areas</h3>
      <InventoryList editItem={editItem} />
      <h3>Add / Edit Storage</h3>
      {editing ? (
        <UpdateInventoryList
          updateItem={updateItem}
          setEditing={setEditing}
          currentItem={currentItem}
        />
      ) : (
        <InventoryForm />
      )}
    </Layout>
  )
}
export default Home
