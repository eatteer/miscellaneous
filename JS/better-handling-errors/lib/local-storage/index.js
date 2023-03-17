import { NonExistentKeyError } from "./errors.js";

export class LocalStorageService {
  /**
   * @param {string} key
   * @returns {string} Item
   * @throws {NonExistentKeyError} If the item associated with the given key does not exists in local storage.
   */
  static getItem(key) {
    const item = localStorage.getItem(key);
    if (!item) {
      const error = new NonExistentKeyError(key);
      console.error(error);
      throw error;
    }
    return item;
  }
}
