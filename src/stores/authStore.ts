import { defineStore } from "pinia";

import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  type User,
} from "firebase/auth";

import { db, auth } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";
import { addUserToUsersCollection } from "@/api/userApi";

// interface User {
//   uid: string;
//   email: string;
//   photoURL: string;
//   displayName: string;
// }

interface Profile {
  id: string;
  name: string;
  avatar: string;
  created: boolean;
}

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isLoggedIn: false,
    user: null as User | null,
    profile: null as Profile | null,
  }),
  getters: {
    userId: (state) => state.user?.uid,
    userEmail: (state) => state.user?.email,
    userAvatar: (state) => state.user?.photoURL,
    userName: (state) => state.user?.displayName,
  },

  actions: {
    setLoggedIn(payload: boolean) {
      this.isLoggedIn = payload;
    },

    async registerWithEmailAndPassword(email: string, password: string) {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const { user } = userCredential;
      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (!userDoc.exists()) {
        const profile = await addUserToUsersCollection(user);
        if (!profile.created) {
          console.log("something went wrong");
          return;
        }
      }
    },

    async loginWithEmailAndPassword(email: string, password: string) {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const { user } = userCredential;
    },

    async loginWithGoogle() {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      const { user } = userCredential;
      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (!userDoc.exists()) {
        const profile = await addUserToUsersCollection(user);
        if (!profile.created) {
          console.log("something went wrong");
          return;
        }
      }
    },

    async logout() {
      await auth.signOut();
    },
  },
});
