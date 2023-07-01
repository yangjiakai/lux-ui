import { defineStore } from "pinia";
import router from "@/router";

export const useChatHistoryStore = defineStore({
    id: "chatHistory",
    state: () => ({
        activeChatMenuId: 1,
        chatMenus: [
            {
                id: 1,
                title: "New Chat",
                path: "/chat/1",
                isEdit: false,
            },
        ],
    }),

    persist: {
        enabled: true,
        strategies: [{ storage: localStorage, paths: ["chatMenus"] }],
    },

    getters: {},
    actions: {
        addMenu(id: number) {
            this.chatMenus.unshift({
                id: id,
                title: "New Chat" + id,
                path: `/chat/${id}}`,
                isEdit: false,
            });
            this.activeChatMenuId = id;

            router.push(`/chat/${id}`);
        },

        deleteMenu(id: number) {
            this.chatMenus = this.chatMenus.filter((item) => item.id !== id);
            if (this.chatMenus.length > 0) {
                this.activeChatMenuId = this.chatMenus[0].id;
                router.push(`/chat/${this.chatMenus[0].id}`);
            } else {
                this.addMenu(1);
            }
        },

        updateMenu(id: number) {
            const menu = this.chatMenus.find((item) => item.id === id);


            if (menu) {
                menu.isEdit = !menu.isEdit;
            }
        },

        clearAllChat() {
            this.chatMenus = [];
            this.addMenu(1);
        }

    },
});
