import { defineStore } from "pinia";
import router from "@/router";

interface Message {
    content: string;
    role: "user" | "assistant" | "system";
}
export const useChatHistoryStore = defineStore({
    id: "chatHistory",
    state: () => ({
        activeChatMenuId: 1,
        chatMenus: [
            {
                id: 1,
                title: "New Chat",
                isEdit: false,
            },
        ],
        chatHistory: [
            {
                id: 1,
                messages: []
            }
        ]
    }),

    persist: {
        enabled: true,
        strategies: [{ storage: localStorage, paths: ["chatMenus"] }],
    },

    getters: {
        getHistoryActive: (state) => () => {
            const history = state.chatHistory.find((item) => item.id === state.activeChatMenuId);
            if (history) {
                return history.messages;
            }
            return [];
        },

        getHistoryById: (state) => (id: number) => {
            const history = state.chatHistory.find((item) => item.id === id);
            if (history) {
                return history.messages;
            }
            return [];
        }


    },
    actions: {
        addMenu(id: number) {
            this.chatMenus.unshift({
                id: id,
                title: "New Chat" + id,
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
        },

        addHistory(id: any, message: Message) {
            const history = this.chatHistory.find((item) => item.id === id);
            if (history) {
                history.messages.push(message);
            }
        }


    },
});
