import {Client, ID, Databases, Storage, Account} from "appwrite"

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(process.env.NEXT_PUBLIC_PROJECT_ID!);

const account = new Account(client)
const databases = new Databases(client)
const storage = new Storage(client)

export {client, account, databases, storage, ID}