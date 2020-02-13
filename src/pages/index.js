import React from "react"
import { Router } from "@reach/router"
import Home from "./home"
import About from "./about"
import Account from "./account"
import NotFoundPage from "./404"
import "../styles/global.css"
//import styled from "styled-components"
export default props => (
  <div>
    <Router>
      <Home path="/" />
      <About path="/about" />
      <Account path="/account" />
      <NotFoundPage default />
    </Router>
  </div>
)
