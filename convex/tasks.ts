import { v } from "convex/values";
import { query } from "./_generated/server";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("tasks").collect();
  },
});

export const getTasksByID = query({
  args: {
    userId: v.id("users"),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("tasks")
      .filter((q) => q.eq(q.field("creator"), args.userId))
      .collect();
  },
});
