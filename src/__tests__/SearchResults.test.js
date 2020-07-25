import React from "react";
import { mount } from "enzyme";
import SearchResults from "../components/SearchResults";

let wrapper;
jest.fn("../apis/api")
describe("SearchResults component", () => {
  beforeEach(() => {
    wrapper = mount(<SearchResults />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("returns the default empty array when there is no data to map through", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("doesn't break without clothes data list", () => {
    expect(wrapper.find('li')).toHaveLength(0);                                                                                                                                           
  });

  it("doesn't break with an empty array", () => {
    wrapper = mount(<SearchResults keyword="" searchResults={[]} />);
    expect(wrapper.find('li')).toHaveLength(0);                                                                                                                                           
  });

  it("renders search results in li based on searchResults length", () => {
    const props = {
      keyword: "trui",
      searchResults: [{ searchterm: "kenzo trui", nrResults: 1000 }]
    }
    wrapper = mount(<SearchResults {...props} />);
    expect(wrapper.find("li")).toHaveLength(1);                                                                                                                                           
  });
});

