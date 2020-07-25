import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../App";
import InputField from "../components/InputField";
import SearchResults from "../components/SearchResults";
import axios from "axios";
import { getDataService } from "../services/apis"
configure({ adapter: new Adapter() });

let wrapper;
let focus;
jest.mock('axios')
describe("App component", () => {
  beforeEach(() => {
    wrapper = shallow(<App />);
    focus = jest.fn();
  });

  it("render", () => {
    const wrapper = shallow(<InputField keyword="" />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should render InputField component", () => {
    expect(wrapper.find(InputField).length).toEqual(1);
  });

  it("should render SearchResults component", () => {
    expect(wrapper.find(SearchResults).length).toEqual(1);
  });

  it("should retrieve data", async () => {
    const keyword = "trui";
    const data = [{ searchterm: "kenzo trui dames", nrResults: 1000 }]
    axios.get.mockImplementationOnce(() => Promise.resolve(data))
    await expect(getDataService(keyword)).resolves.toEqual(data)
    expect(axios.get).toHaveBeenCalledWith(`http://localhost:3000/search?q=${keyword}`, {"headers": { "Content-Type": "application/json"}});
  })

  // it("can focus on input field on render", () => {
  //   const useRefSpy = jest.spyOn(React, 'useRef').mockReturnValueOnce({ current: { focus } });
  //   expect(useRefSpy).toBeCalledWith(focus);
  //   expect(focus).toBeCalledTimes(1);
  // });
});
