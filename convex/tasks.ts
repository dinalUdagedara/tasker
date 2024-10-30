import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

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

// Updating the state of a task using the drag and dropping

export const droppingTasks = mutation({
  args: {
    taskID: v.id("tasks"),
    targetStatus: v.string(),
  },
  handler: async (ctx, args) => {
    const task = await ctx.db
      .query("tasks")
      .filter((q) => q.eq(q.field("_id"), args.taskID))
      .first();

    if (!task) {
      throw new Error("Task not found");
    }
    await ctx.db.patch(task._id, {
      status: args.targetStatus,
    });
  },
});
