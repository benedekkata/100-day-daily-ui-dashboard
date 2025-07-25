import { getImageUrl, cn } from "./utils";

describe("getImageUrl utility", () => {
  it("should return the correct image url", () => {
    const image = "test.png";
    const url = getImageUrl(image);
    expect(url).toBe(`${import.meta.env.BASE_URL}designs/${image}`);
  });
});

describe("cn utility", () => {
  it("returns an empty string for no arguments", () => {
    expect(cn()).toBe("");
  });

  it("merges class names", () => {
    expect(cn("foo", "bar")).toBe("foo bar");
  });

  it("handles conditional classes", () => {
    const shouldInclude = false;
    expect(cn("foo", shouldInclude && "bar", undefined, null, "baz")).toBe(
      "foo baz"
    );
  });

  it("merges tailwind classes correctly", () => {
    expect(cn("p-2", "p-4")).toBe("p-4"); // tailwind-merge keeps the last
  });

  it("handles array of classes", () => {
    expect(cn(["foo", "bar"]).includes("foo")).toBe(true);
    expect(cn(["foo", "bar"]).includes("bar")).toBe(true);
  });
});
