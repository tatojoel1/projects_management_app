import "server-only";

import { Client, Account, Users, Databases } from "node-appwrite";

export async function createAdminClient() {
  const client = new Client();
  client
    .setSelfSigned(true) // Remove in production
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!) // Your API Endpoint
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!) // Your project ID
    .setKey(process.env.NEXT_APPWRITE_KEY!); // Your secret key
  return {
    get account() {
      return new Account(client);
    },
  };
}
