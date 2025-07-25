import { render, screen } from "@testing-library/react";
import { Button } from "./button";

describe("Button", () => {
  it("renders with default props", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });
  it("renders with variant and size", () => {
    render(
      <Button variant="destructive" size="lg">
        Delete
      </Button>
    );
    expect(screen.getByText("Delete")).toBeInTheDocument();
  });
});
