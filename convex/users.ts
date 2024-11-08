import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const registerUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    password: v.string(),
  },
  handler: async (ctx, args) => {
    // Check if a user with the same email already exists
    const existingUser = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("email"), args.email))
      .first();

    if (existingUser) {
      throw new Error("A user with this email already exists.");
    }

    await ctx.db.insert("users", {
      email: args.email,
      name: args.name,
      password: args.password,
    });
  },
});

export const getUserByEmailDB = query({
  args: {
    email: v.string(),
  },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("email"), args.email))
      .first();

    if (user) {
      return user;
    }
  },
});
