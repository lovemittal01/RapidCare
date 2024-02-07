const crypto = require("crypto");

export function generateKey() {
  return crypto.randomBytes(20).toString("hex");
}
