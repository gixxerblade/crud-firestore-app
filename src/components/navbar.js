import React from "react"
import { Link } from "@reach/router"
import styled from "styled-components"
//import Flex, { FlexItem } from "styled-flex-component"
import "../styles/global.css"
const Navbar = () => (
  <>
    <hr />
    <NavBarLayout>
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to="about">about</Link>
      </li>
      <li>
        <Link to="account">account</Link>
      </li>
    </NavBarLayout>
    <hr />
  </>
)
const NavBarLayout = styled.ul`
  text-align: center;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  font-size: 1.5em;
  text-decoration: none;
  font-family: 'Poppins';
`

export default Navbar
