import { ExampleService } from "../src";

describe("Example Service", () => {
  it("should return Hello World!", () => {
    var exampleService = new ExampleService();
    expect(exampleService.helloWorld()).toBe("Hello World!");
  });
});
