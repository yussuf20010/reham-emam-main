import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";

console.log("Initializing NextAuth...");

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log("User Signed In:", user);
      console.log("Account Details:", account);
      console.log("Profile Info:", profile);
      return true;
    },
    async session({ session, user }) {
      console.log("Session Created:", session);
      return session;
    },
    async jwt({ token, user }) {
      console.log("JWT Updated:", token);
      return token;
    },
  },
  events: {
    async signOut({ token }) {
      console.log("User Signed Out:", token);
    },
  },
  debug: true, // Enables detailed logging in the console
});

console.log("NextAuth Config Loaded");
