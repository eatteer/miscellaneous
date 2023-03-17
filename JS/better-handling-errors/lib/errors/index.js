/**
 * Automatically setups the error name using the class name.
 * @example
 * class LocalStorageError extends BaseError {}
 * const error = new LocalStorageError(...)
 * console.log(error.name) // 'LocalStorageError'
 */
export class BaseError extends Error {
  /**
   * @param {string} message
   */
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}
