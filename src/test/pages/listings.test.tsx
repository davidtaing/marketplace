import {
  screen,
  render,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import ListingsPage from "../../pages/listings";

describe("ListingsPage", () => {
  describe("when the page renders", () => {
    test("it should show a loading state", () => {
      render(<ListingsPage />);

      expect(screen.getByText(/loading/i));
    });
  });
});
