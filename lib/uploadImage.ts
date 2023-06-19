import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
  if(!file) return;

  const fileUploaded = await storage.createFile(
    "64845cfbd639a7bf09fd",
    ID.unique(),
    file
  )

  return fileUploaded
}

export default uploadImage;