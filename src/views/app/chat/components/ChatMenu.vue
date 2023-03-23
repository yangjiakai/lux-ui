<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts"></script>

<template>
  <v-card height="100%" class="pa-3">
    <!-- ---------------------------------------------- -->
    <!-- Add Task Dialog -->
    <!-- ---------------------------------------------- -->

    <v-btn color="primary" block size="large" class="mb-3">New Chat</v-btn>

    <v-list nav class="mt-2 pa-0">
      <v-list-item
        prepend-icon="mdi-calendar-check"
        to="/apps/chat/base-channel"
        active-class="text-primary"
        link
        title="AI"
      >
        <template v-slot:append>
          <v-badge color="primary" inline></v-badge>
        </template>
      </v-list-item>
    </v-list>
    <div class="pa-1 mt-2 text-overline text-grey">More Chats</div>
  </v-card>
</template>

<style scoped lang="scss"></style>
