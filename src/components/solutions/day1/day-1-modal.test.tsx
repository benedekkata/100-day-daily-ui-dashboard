import { render, screen, fireEvent } from "@testing-library/react";
import Day1Modal from "./day-1-modal";

// Example tests for Day1Modal

describe("Day1Modal", () => {
  // 1. Renders the "Open Modal" button initially
  it("renders the Open Modal button initially", () => {
    render(<Day1Modal />);
    expect(screen.getByText(/open modal/i)).toBeInTheDocument();
  });

  // 2. Clicking "Open Modal" shows the modal content and the "X" and "Open as Modal" buttons
  it("shows modal content and buttons when Open Modal is clicked", () => {
    render(<Day1Modal />);
    fireEvent.click(screen.getByText(/open modal/i));
    expect(screen.getByText(/open as modal/i)).toBeInTheDocument();
    expect(screen.getByText("X")).toBeInTheDocument();
    expect(screen.getByText(/this is my "modal"/i)).toBeInTheDocument();
  });

  // 3. Clicking "X" closes the modal
  it("closes the modal when X is clicked", () => {
    render(<Day1Modal />);
    fireEvent.click(screen.getByText(/open modal/i));
    fireEvent.click(screen.getByText("X"));
    expect(screen.getByText(/open modal/i)).toBeInTheDocument();
  });

  // 4. Modal content is "This is my 'modal'" by default
  it("shows default modal content", () => {
    render(<Day1Modal />);
    fireEvent.click(screen.getByText(/open modal/i));
    expect(screen.getByText(/this is my "modal"/i)).toBeInTheDocument();
  });

  // 5. Clicking "Open as Modal" keeps the content as default
  it("keeps default content when Open as Modal is clicked", () => {
    render(<Day1Modal />);
    fireEvent.click(screen.getByText(/open modal/i));
    fireEvent.click(screen.getByText(/open as modal/i));
    expect(screen.getByText(/this is my "modal"/i)).toBeInTheDocument();
  });
});
