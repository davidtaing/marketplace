import {
  screen,
  render,
  waitForElementToBeRemoved,
  act,
} from "@testing-library/react";
import { renderHook } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";

import { useRouter } from "next/router";

import { server } from "../../mocks/server";

import ListingsPage from "../../pages/listings";

jest.mock("next/router", () => require("next-router-mock"));

describe("ListingsPage", () => {
  describe("when the page renders", () => {
    test("it should show a loading state", () => {
      render(<ListingsPage />);

      expect(screen.getByText(/loading/i));
    });
  });

  describe("when the tasks are fetched", () => {
    test("it shows the listings", async () => {
      const user = userEvent.setup();
      render(<ListingsPage />);

      await act(() => {
        waitForElementToBeRemoved(() => screen.getByText(/loading/i));
      });

      const listItems = screen.queryAllByRole("listitem");

      expect(listItems.length).toBeGreaterThan(0);

      await user.click(listItems[0]);
    });
  });

  describe("when the user clicks the listing", () => {
    test("it redirects to the task page", async () => {
      const user = userEvent.setup();
      const { result } = renderHook(() => {
        return useRouter();
      });

      server.use(
        rest.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/tasks`,
          (req, res, ctx) => {
            return res(
              ctx.json([
                {
                  location: {
                    name: "2000",
                  },
                  status: "open",
                  category: "Cleaning",
                  details: "Test: End of Lease Cleaning",
                  budget: 200,
                  id: "12345678",
                },
              ])
            );
          }
        )
      );

      render(<ListingsPage />);

      await act(() => {
        waitForElementToBeRemoved(() => screen.getByText(/loading/i));
      });

      const listItems = screen.queryAllByRole("listitem");

      expect(listItems.length).toBeGreaterThan(0);

      await user.click(listItems[0]);

      expect(result.current).toMatchObject({ asPath: "/tasks/12345678" });
    });
  });
});
