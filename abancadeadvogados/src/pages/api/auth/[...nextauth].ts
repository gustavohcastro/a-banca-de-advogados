import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../lib/prismadb"

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
  CredentialsProvider({  
    name: 'Credentials',
    credentials: {
      username: { label: "Username", type: "text", placeholder: "jsmith" },
      password: {  label: "Password", type: "password" }
    },
    async authorize(credentials, req) {
      const res = await fetch("/your/endpoint", {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: { "Content-Type": "application/json" }
      })
      const user = await res.json()

      // If no error and we have user data, return it
      if (res.ok && user) {
        return user
      }
      // Return null if user data could not be retrieved
      return null
    }
  })
],
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken
      return session
    }
  }
}

export default NextAuth(authOptions)