describe("sample test 101", () => {
  it("works as expected", () => {
    const age = 50;
    expect(1).toEqual(1);
    expect(age).toEqual(50);
  });

  it("handles ranges just fine", () => {
    const age = 50;
    expect(age).toBeGreaterThan(25);
  });

  it("makes a list of dog names", () => {
    const dogs = ["Max", "chichi"];
    expect(dogs).toEqual(dogs);
    expect(dogs).toContain("Max");
    expect(dogs).toContain("chichi");
  });
});
