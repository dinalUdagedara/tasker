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

// Adding a New task to the DB
export const addNewTask = mutation({
  args: {
    creator: v.id("users"),
    title: v.string(),
    content: v.string(),
    priority: v.string(),
    status: v.string(),
  },
  handler: async (ctx, args) => {
    const newTask = await ctx.db.insert("tasks", {
      title: args.title,
      content: args.content,
      assignees: [],
      comments: [],
      creator: args.creator,
      files: [],
      priority: args.priority,
      status: args.status,
    });

    return newTask;
  },
});

// Editing a task

export const editTask = mutation({
  args: {
    taskID: v.id("tasks"),
    title: v.string(),
    content: v.string(),
    priority: v.string(),
    status: v.string(),
    comments: v.array(
      v.object({
        author: v.string(),
        content: v.string(),
        timestamp: v.string(),
      })
    ),
    assignees: v.array(v.string()),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.taskID, {
      title: args.title,
      content: args.content,
      comments: args.comments,
      assignees: args.assignees,
      priority: args.priority,
      status: args.status,
    });
  },
});

export const getTaskByID = query({
  args: {
    taskId: v.id("tasks"),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("tasks")
      .filter((q) => q.eq(q.field("_id"), args.taskId))
      .first();
  },
});
