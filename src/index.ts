/** Example service
 *
 * ```typescript
 * const exampleService = new ExampleService();
 * ```
 *
 */

export class ExampleService {
  /**
   * called when a new instance is created
   */
  constructor() {
    // nothing to do
  }

  /**
   * Returns "Hello World!"
   *
   * Example:
   *  ```typescript
   * const exampleService = new ExampleService();
   * helloWorldString = exampleService.helloWorld();
   * ```
   *
   * @returns a string with "Hello World!"
   *
   *
   */
  public helloWorld(): string {
    return "Hello World!";
  }
}
