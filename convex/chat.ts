import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const createConversation = mutation({
  args: {
    user_1_email: v.string(),
    user_2_email: v.string(),
  },
  handler: async (ctx, args) => {
    // Check if a user with the same email already exists
    const existingUser = await ctx.db
      .query("chatConversations")
      .filter((q) =>
        q.or(
          q.eq(q.field("participantsEmails"), [
            args.user_1_email,
            args.user_2_email,
          ]),
          q.eq(q.field("participantsEmails"), [
            args.user_2_email,
            args.user_1_email,
          ])
        )
      )
      .first();

    if (existingUser) {
      return { error: "A chat converstion with this user's already exists." };
    }

    const conversationID = await ctx.db.insert("chatConversations", {
      participantsEmails: [args.user_1_email, args.user_2_email],
      lastUpdated: new Date().toISOString(),
    });

    return conversationID;
  },
});

export const sendMessage = mutation({
  args: {
    conversationID: v.id("chatConversations"),
    senderEmail: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    const timestamp = new Date().toISOString();

    //Add message to the DB
    const newMessage = await ctx.db.insert("chatMessages", {
      conversationId: args.conversationID,
      message: args.message,
      senderEmail: args.senderEmail,
      timeStamp: timestamp,
    });

    //update the timestamp in the conversation
    await ctx.db.patch(args.conversationID, { lastUpdated: timestamp });
  },
});

export const getMessagesInConversation = query({
  args: {
    user_1_email: v.string(),
    user_2_email: v.string(),
  },
  handler: async (ctx, args) => {
    const conversation = await ctx.db
      .query("chatConversations")
      .filter((q) =>
        q.or(
          q.eq(q.field("participantsEmails"), [
            args.user_1_email,
            args.user_2_email,
          ]),
          q.eq(q.field("participantsEmails"), [
            args.user_2_email,
            args.user_1_email,
          ])
        )
      )
      .first();

    if (conversation) {
      const chat = await ctx.db
        .query("chatMessages")
        .filter((q) => q.eq(q.field("conversationId"), conversation._id))
        .collect();

      if (chat) return chat;
    }
  },
});
