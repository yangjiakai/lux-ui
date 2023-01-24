import { defineStore } from "pinia";

interface Photo {
  id: string;
  created_at: Date;
  updated_at: Date;
  promoted_at?: Date;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string;
  urls: any;
  links: any;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship?: any;
  topic_submissions: any;
  user: any;
  tags_preview: any[];
}

export const useUnsplashStore = defineStore({
  id: "upsplash",
  state: () => ({
    favoriteList: ref<Photo[]>([]),
  }),

  persist: {
    enabled: true,
    strategies: [{ storage: localStorage, paths: ["favoriteList"] }],
  },

  getters: {},
  actions: {
    addToFavorite(payload: Photo) {
      this.favoriteList.push(payload);
    },

    removeFromFavorite(payload: Photo) {
      this.favoriteList = this.favoriteList.filter(
        (item) => item.id != payload.id
      );
    },
  },
});
