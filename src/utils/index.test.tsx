import { joinClassNames } from "./index";

describe("joinClassNames", () => {
  test("returns empty string with no params", () => {
    const actual = joinClassNames();

    expect(actual).toBe("");
  });

  test("concats two strings", () => {
    const actual = joinClassNames("one", "two");

    expect(actual).toBe("one two");
  });

  test("concats three strings", () => {
    const actual = joinClassNames("one", "two", "three");

    expect(actual).toBe("one two three");
  });
});
