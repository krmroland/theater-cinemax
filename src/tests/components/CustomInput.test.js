import React from "react";
import { shallow } from "enzyme";
import CustomInput from "../../components/CustomInput";
describe("Custom Input", () => {
    test("It sets the correct class", () => {
        const wrapper = shallow(<CustomInput />);

        expect(wrapper.hasClass("form-group")).toBeTruthy();
    });

    test("It sets a label with a label prop", () => {
        const wrapper = shallow(<CustomInput label="Name" />);
        expect(wrapper.contains(<label>Name</label>)).toBeTruthy();
    });

    test("It  it triggers the on change call back", () => {
        const onChange = jest.fn();

        const wrapper = shallow(<CustomInput />);

        const event = { currentTarget: { value: "" } };

        wrapper.find("input").simulate("change", event);
        expect(onChange).not.toHaveBeenCalled();
        wrapper.setProps({ onChange });
        wrapper.find("input").simulate("change", event);
        expect(onChange).toHaveBeenCalled();
    });

    test("It  renders a select input", () => {
        const wrapper = shallow(<CustomInput type="select" />);

        expect(wrapper.find("select").children()).toHaveLength(1);
    });

    test("It  renders object data as key value in options", () => {
        const wrapper = shallow(
            <CustomInput type="select" options={{ one: 1 }} />
        );

        expect(wrapper.find("select").children()).toHaveLength(2);
    });

    test("It  renders array elements as options", () => {
        const wrapper = shallow(
            <CustomInput type="select" options={[1, 2, 3, 4, 5]} />
        );

        expect(wrapper.find("select").children()).toHaveLength(6);
    });

    test("It  renders a numeric prop for options", () => {
        const wrapper = shallow(<CustomInput type="select" options={2} />);

        expect(wrapper.find("select").children().length).toEqual(3);
    });
});
