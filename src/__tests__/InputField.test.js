import React from "react";
import { mount } from "enzyme";
import InputField from "../components/InputField";

let wrapper;
let props;

afterEach(() => {
  wrapper.unmount();
});

describe("InputField component on initial render", () => {
  it("shows inputfield with only search icon", () => {
    wrapper = mount(<InputField keyword="" />);
    expect(wrapper.find("input").length).toEqual(1);
    expect(wrapper.find("i").length).toEqual(1);
  });
});

describe("InputField component on user changes", () => {
  beforeEach(() => {
    props = {
      keyword: "trui",
      setKeyword: jest.fn(),
      getClothesData: jest.fn(),
      useRef: null
    };

    wrapper = mount(<InputField {...props} />);

    wrapper.find("input").simulate("change", {
      name: "input",
      target: { value: "trui" },
    });
    wrapper.update();
  });

  it("has an inputfield that users can type in", () => {
    expect(wrapper.find("input").prop("value")).toEqual("trui");
  });

  it("shows an inputfield with search and close icon", () => {
    wrapper.update();
    expect(wrapper.find("input").length).toEqual(1);
    expect(wrapper.find("i").length).toEqual(2);
  });
});
