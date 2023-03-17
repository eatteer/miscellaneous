import { LocalStorageService } from "./lib/local-storage/index.js";
import { NonExistentKeyError } from "./lib/local-storage/errors.js";

const key = "username";
try {
  const username = LocalStorageService.getItem(key);
  console.log(username);
} catch (error) {
  if (error instanceof NonExistentKeyError) {
    alert(`Could not get ${error.key}`);
  } else throw error;
}
