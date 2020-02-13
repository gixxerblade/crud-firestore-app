import { createGlobalStyle } from "styled-components"
import PoppinsWoff from "./poppins-v9-latin-regular.woff"
import PoppinsWoff2 from "./poppins-v9-latin-regular.woff2"

export default createGlobalStyle`
    @font-face {
        font-family: 'Poppins';
        src: local('Poppins'), local('Poppins'),
        url(${PoppinsWoff2}) format('woff2'),
        url(${PoppinsWoff}) format('woff');
        font-weight: 400;
        font-style: normal;
    }
`
