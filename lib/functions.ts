import bcrypt from "bcrypt";

// Number of salt rounds for bcrypt (the higher the number, the more secure but slower)
const SALT_ROUNDS = 10;

export async function encryptPassword(password: string): Promise<string> {
  // Hash the password using bcrypt
  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
  return hashedPassword;
}
