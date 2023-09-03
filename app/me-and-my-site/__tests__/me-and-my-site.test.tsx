import renderer from "react-test-renderer";
import MeAndMySite from "../page";

describe("Me and my site", () => {
  it("renders the page", () => {
    const tree = renderer.create(<MeAndMySite />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
