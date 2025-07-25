import { render } from "@testing-library/react";
import { Progress } from "./progress";

describe("Progress", () => {
  it("renders with value", () => {
    render(<Progress value={50} />);
    // You can add more specific assertions if needed
  });
});
