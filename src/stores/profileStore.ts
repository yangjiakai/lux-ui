import { defineStore } from "pinia";

export const useProfileStore = defineStore({
  id: "userProfile",
  state: () => ({
    basic: {
      username: "shirabako",
      realname: "yang jia kai",
      email: "yjkabko@gmail.com",
      avatar:
        "https://lh3.googleusercontent.com/-Ea4OzXAN02c/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdwv4mCQ5zJ1B-B9Wp1Cr6pmp1Y9w/s96-c/photo.jpg",
      location: "Tokyo,Japab",
      role: "Admin",
      disabled: false,
      about: "Full Stack Developer",
      lastSignIn: "2023-03-29T01:11:13Z",
    },
    authorized: {
      google: false,
      facebook: false,
    },
    notifications: {
      officialEmails: true,
      followerUpdates: true,
    },
  }),
  actions: {
    getProfile() {
      return {
        basic: this.basic,
        authorized: this.authorized,
        notifications: this.notifications,
      };
    },

    // update Basic Info
    updateBasicInfo(info) {
      this.basic = { ...this.basic, ...info };
    },
    // update Authorized
    updateAuthorizedStatus(service, status) {
      this.authorized[service] = status;
    },
    // Update Notifications
    updateNotificationSettings(settings) {
      this.notifications = { ...this.notifications, ...settings };
    },
  },
});
