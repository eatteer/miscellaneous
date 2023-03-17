import { BaseError } from "../errors/index.js";

export class LocalStorageError extends BaseError {}

export class NonExistentKeyError extends LocalStorageError {
  /**
   * @param {string} key
   */
  constructor(key) {
    const message = `Local storage "${key}" key does not exist.`;
    super(message);
    this.key = key;
  }
}
