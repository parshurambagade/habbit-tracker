import { Client, Account, ID, Models } from 'react-native-appwrite';

let client: Client;

client = new Client();
client
    .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!)   // Your Project ID
    .setPlatform(process.env.EXPO_PUBLIC_APPWRITE_PLATFORM!);   // Your package name / bundle identifier

export const account = new Account(client);