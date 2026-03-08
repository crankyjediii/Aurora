import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const store = mutation({
  args: {},
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handler: async (ctx: any) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Called store without authentication present");
    }

    const user = await ctx.db
      .query("users")
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .withIndex("by_clerkId", (q: any) => q.eq("clerkId", identity.subject))
      .unique();

    if (user !== null) {
      if (
        user.firstName !== identity.givenName ||
        user.lastName !== identity.familyName ||
        user.email !== identity.email
      ) {
        await ctx.db.patch(user._id, {
          firstName: identity.givenName ?? "",
          lastName: identity.familyName ?? "",
          email: identity.email ?? "",
        });
      }
      return user._id;
    }

    return await ctx.db.insert("users", {
      clerkId: identity.subject,
      email: identity.email ?? "",
      firstName: identity.givenName ?? "",
      lastName: identity.familyName ?? "",
      onboardingStatus: "pending",
    });
  },
});

export const getProfile = query({
  args: {},
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handler: async (ctx: any) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      return null;
    }
    return await ctx.db
      .query("users")
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .withIndex("by_clerkId", (q: any) => q.eq("clerkId", identity.subject))
      .unique();
  },
});

export const updateOnboardingState = mutation({
  args: {
    status: v.union(v.literal("pending"), v.literal("completed")),
    data: v.optional(v.any()),
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handler: async (ctx: any, args: any) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthenticated call to updateOnboardingState");
    }

    const user = await ctx.db
      .query("users")
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .withIndex("by_clerkId", (q: any) => q.eq("clerkId", identity.subject))
      .unique();

    if (!user) {
      throw new Error("User not found");
    }

    await ctx.db.patch(user._id, {
      onboardingStatus: args.status,
      ...(args.data !== undefined ? { onboardingData: args.data } : {}),
    });
    
    return true;
  },
});
