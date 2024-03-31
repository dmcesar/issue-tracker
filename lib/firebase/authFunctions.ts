"use server";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase"; // Adjust the import path as necessary

// Function that takes email and password as arguments and uses Firebase Authentication to sign the user in
const signIn = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    // userCredential.user will have user details
    return userCredential.user;
  } catch (error) {
    throw error; // Handle or throw error appropriately
  }
};

export const authenticate = async (
  _currentState: unknown,
  formData: FormData
) => {
  try {
    const user = await signIn(
      formData.get("email") as string,
      formData.get("password") as string
    );
  } catch (err) {
    // TODO: Read documentation to handle error sent to form
    return "Error";
  }
};
