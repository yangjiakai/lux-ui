<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import {
  getRandomPhotoApi,
  getPhotosApi,
  searchUsersApi,
} from "@/api/unsplashApi";

const search = ref("");
const loading = ref(true);
const totalRows = ref(0);

const queryPptions = reactive({
  query: "cat",
  page: 1,
  per_page: 10,
});

const headers = [
  { title: "用户id", key: "id" },
  { title: "用户名", key: "username" },
  { title: "全名", key: "name" },
  { title: "头像", key: "avatar" },
];

const usersList = ref([]);

const getUsers = async () => {
  loading.value = true;
  const params = queryPptions;
  const usersResponse = await searchUsersApi(params);

  usersList.value = usersResponse.data.results.map((user) => {
    return {
      id: user.id,
      username: user.username,
      name: user.name,
      avatar: user.profile_image.small,
    };
  });

  console.log(
    usersResponse.data.results.map((user) => {
      return {
        id: user.id,
        username: user.username,
        name: user.name,
      };
    })
  );

  totalRows.value = usersResponse.data.total;
  loading.value = false;
};

const onUpdateOptions = async (options) => {
  queryPptions.per_page = options.itemsPerPage;
  queryPptions.page = options.page;
  await getUsers();
};
</script>

<template>
  <div class="">
    <v-card>
      <v-card-title primary-title> Photos </v-card-title>
      <hr />
      <v-card-text>
        <v-data-table-server
          :headers="headers"
          :items="usersList"
          :search="search"
          :loading="loading"
          :items-per-page="queryPptions.per_page"
          :items-length="totalRows"
          item-value="id"
          @update:options="onUpdateOptions"
        >
          <template v-slot:item="{ item }">
            <tr>
              <td>{{ item.columns.id }}</td>
              <td>{{ item.columns.username }}</td>
              <td>{{ item.columns.name }}</td>
              <td>
                <v-avatar size="30">
                  <img :src="item.columns.avatar" alt="alt" />
                </v-avatar>
              </td>
            </tr>
          </template>
        </v-data-table-server>
      </v-card-text>
    </v-card>
  </div>
</template>

<style scoped lang="scss"></style>
