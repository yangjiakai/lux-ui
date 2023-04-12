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
import router from "@/router";

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

  persist: {
    enabled: true,
    strategies: [{ storage: localStorage, paths: ["isLoggedIn"] }],
  },

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
      if (user) {
        router.push("/");
      }
    },

    async loginWithEmailAndPassword(email: string, password: string) {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const { user } = userCredential;
      if (user) {
        router.push("/");
      }
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
      if (user) {
        router.push("/");
      }
    },

    async logout() {
      await auth.signOut();
      router.push({ name: "auth-signin" });
    },
  },
});
