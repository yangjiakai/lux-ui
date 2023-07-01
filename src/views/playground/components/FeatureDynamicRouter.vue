<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { useChatHistoryStore } from "@/stores/chatHistoryStore";
const chatHistory = useChatHistoryStore();
const router = useRouter();

const navigateTo = (id) => {
  chatHistory.activeChatMenuId = id;
  router.push(`/chat/${id}`);
};

const deleteId = ref(0);

const handleDelete = (id: number) => {
  deleteId.value = id;
  deleteDialog.value = true;
};

const confirmDelete = () => {
  console.log("deleteId.value", deleteId.value);

  chatHistory.deleteMenu(deleteId.value);
  deleteDialog.value = false;
};

const deleteDialog = ref(false);

const handleEdit = (id) => {
  chatHistory.updateMenu(id);
};
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="6" md="4">
        <v-card min-height="800" class="pa-5">
          <v-list nav>
            <v-btn
              color="primary"
              class="my-5"
              @click="chatHistory.addMenu(Date.now())"
              >addNewChat</v-btn
            >
            <v-btn
              color="primary"
              class="my-5 ml-1"
              @click="chatHistory.clearAllChat"
              >clearAllChat</v-btn
            >
            <v-list-item
              v-for="menu in chatHistory.chatMenus"
              :key="menu.id"
              prepend-icon="mdi-forum"
              :value="menu.id"
              @click="navigateTo(menu.id)"
              :active="chatHistory.activeChatMenuId === menu.id"
            >
              <v-text-field
                v-if="menu.isEdit"
                density="compact"
                hide-details
                v-model="menu.title"
              ></v-text-field>

              <div v-else>{{ menu.title }}</div>
              <template
                v-if="chatHistory.activeChatMenuId === menu.id"
                v-slot:append
              >
                <v-btn
                  density="compact"
                  color="grey-lighten-1"
                  icon="mdi-note-edit-outline"
                  variant="text"
                  @click="handleEdit(menu.id)"
                ></v-btn>
                <v-btn
                  density="compact"
                  color="grey-lighten-1"
                  icon="mdi-delete-outline"
                  variant="text"
                  @click="handleDelete(menu.id)"
                ></v-btn>
              </template>
            </v-list-item>
            <v-list-item
              prepend-icon="mdi-view-dashboard"
              title="Home"
              value="home"
            ></v-list-item>
            <v-list-item
              prepend-icon="mdi-forum"
              title="About"
              value="about"
            ></v-list-item>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="6">
        <router-view></router-view>
      </v-col>
    </v-row>
  </v-container>
  <v-dialog v-model="deleteDialog" persistent width="auto">
    <v-card>
      <v-card-text>
        <v-alert type="error" variant="outlined" border="top">
          确定要删除对话吗？
        </v-alert>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn variant="text" @click="deleteDialog = false"> Disagree </v-btn>
        <v-btn color="green-darken-1" variant="text" @click="confirmDelete">
          Agree
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped lang="scss"></style>
