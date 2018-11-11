import React from "react";
import { shallow, mount } from "enzyme";

import App from "../../components/App";

describe("APP Component", () => {
    test("it has only one child element ", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.children()).toHaveLength(1);
    });
});
