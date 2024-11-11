import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  tasks: defineTable({
    title: v.string(),
    content: v.string(),
    status: v.string(),
    priority: v.string(),
    assignees: v.array(v.string()), // List of user IDs
    comments: v.array(
      v.object({
        author: v.string(), // userID of the comment author
        content: v.string(),
        timestamp: v.string(),
      })
    ),
    files: v.array(
      v.object({
        taskID: v.string(),
        file: v.string(),
      })
    ),
    creator: v.id("users"), // User ID of the creator
    creatorEmail: v.string(),
  }),
  users: defineTable({
    name: v.string(),
    email: v.string(),
    password: v.string(),
  }),
  chatMessages: defineTable({
    conversationId: v.id("chatConversations"), // ID of the conversation
    senderEmail: v.string(),
    message: v.string(),
    timeStamp: v.string(),
  }),
  chatConversations: defineTable({
    participantsEmails: v.array(v.string()), // Email IDs of the two participants
    lastUpdated: v.string(), // Timestamp of last update (for ordering chats)
  }),
});
