import {
  screen,
  render,
  waitForElementToBeRemoved,
  act,
} from "@testing-library/react";
import ListingsPage from "../../pages/listings";

describe("ListingsPage", () => {
  describe("when the page renders", () => {
    test("it should show a loading state", () => {
      render(<ListingsPage />);

      expect(screen.getByText(/loading/i));
    });
  });

  describe("when the tasks are fetched", () => {
    test("it shows the listings", async () => {
      render(<ListingsPage />);

      await act(() => {
        waitForElementToBeRemoved(() => screen.getByText(/loading/i), {
          timeout: 5000,
        });
      });

      const results = screen.getAllByRole("listitem");

      expect(results.length).toBeGreaterThan(0);
    });
  });
});
