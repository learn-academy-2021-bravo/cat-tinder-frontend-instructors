import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import CatEdit from "./CatEdit"

Enzyme.configure({ adapter: new Adapter() })

describe("when CatEdit loads", () => {
  it("should render a label with the value of Cats name", () => {
    const catEdit = shallow(<CatEdit />)
    const label = catEdit.find("Label")
    const button = catEdit.find("Button")
    expect(label.length).toEqual(3)
    expect(button.length).toEqual(1)
  })
})
