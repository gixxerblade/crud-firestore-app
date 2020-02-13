import React from "react"
import renderer from "react-test-renderer"

import Navbar from "../../components/navbar"

describe("Navbar", ()=>{
    it("Worked better than you thought it would...", ()=>{
        const tree = renderer.create(<Navbar/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})