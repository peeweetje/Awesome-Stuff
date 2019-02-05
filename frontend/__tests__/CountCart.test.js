import { shallow, mount } from "enzyme";
import toJSON from "enzyme-to-json";
import CountCart from "../components/CountCart";

describe("<CountCart/>", () => {
  it("renders", () => {
    shallow(<CountCart count={10} />);
  });

  it("matches the snapshot", () => {
    const wrapper = shallow(<CountCart count={11} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("updates via props", () => {
    const wrapper = shallow(<CountCart count={50} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
    wrapper.setProps({ count: 10 });
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
