import { render, screen } from "@testing-library/react";
import Modal from "./Modal";
describe("Modal", () => {
  function renderModal(show: boolean) {
    render(
      <Modal title="Test Title" show={show} closeButton={<button />}>
        <h1>test</h1>
      </Modal>
    );
  }
  it("should show children", () => {
    renderModal(true);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  it("should not show children", () => {
    renderModal(false);
    const heading = screen.queryByRole("heading", { level: 1 });
    expect(heading).toBeFalsy();
  });
});
