import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("page", () => {
  it("should show hello text", () => {
    render(<Home />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});
