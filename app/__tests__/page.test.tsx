import renderer from "react-test-renderer";
import Home from "../page";

describe("Home", () => {
  it("renders the page", () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
