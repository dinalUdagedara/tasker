import bcrypt from "bcrypt";
import { api } from "@/convex/_generated/api";
import { fetchQuery } from "convex/nextjs";
import { User } from "./types";

// Number of salt rounds for bcrypt (the higher the number, the more secure but slower)
const SALT_ROUNDS = 10;

export async function encryptPassword(password: string): Promise<string> {
  // Hash the password using bcrypt
  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
  return hashedPassword;
}


export const getUserByEmailNew = async (
  email: string
): Promise<User | null> => {
  const user = await fetchQuery(api.users.getUserByEmailDB, { email });
  if (user) {
    return user;
  } else {
    return null;
  }
};
