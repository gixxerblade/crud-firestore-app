import React, { useState } from "react"
import { FaTrash, FaPencilAlt } from "react-icons/fa"
import { useFirebase } from "gatsby-plugin-firebase"
import deleteStorage from "../functions/deleteStorage"
import "../styles/global.css"
import styled from "styled-components"
const useViewList = () => {
  const initialStorageState = [{ id: null, item: "" }]
  const [storageSource, setStorageSource] = useState(initialStorageState)
  useFirebase(firebase => {
    firebase
      .firestore()
      .collection("storageSource")
      .onSnapshot(snapshot => {
        const newStorage = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }))
        setStorageSource(newStorage)
      })
  }, [])
  return storageSource
}

const InventoryList = ({ editItem }) => {
  const newStorage = useViewList()
  return (
    <InventoryListUl>
      {newStorage.map(item => (
        <InventoryListItem className="inventory-list-item" key={item.id}>
          {item.item}
          <FaPencilAlt
            onClick={() => editItem(item)}
            className="pencil"
            size="20px"
            style={{ margin: "0 10px" }}
          />
          <FaTrash
            className="trash"
            size="20px"
            style={{ margin: "0 10px" }}
            onClick={() => deleteStorage(item.id, "storageSource")}
          />
        </InventoryListItem>
      ))}
    </InventoryListUl>
  )
}

export default InventoryList

const InventoryListItem = styled.li`
  list-style-type: none;
`
const InventoryListUl = styled.ul`
  font-family: "Poppins";
  height: 50%;
  column-count: 2;
  display: inline-block;
`
