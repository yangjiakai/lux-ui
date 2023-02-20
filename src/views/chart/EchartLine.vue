<!--
* @Component: EchartLine
* @Maintainer: J.K. Yang
* @Description: Echart 折线图
-->
<template>
  <div class="">
    <v-card height="600">
      EchartLine
      <v-btn @click="isShow = true" color="success">modal</v-btn>
    </v-card>

    <v-dialog v-model="isShow">
      <v-card ref="target" height="500" class="pa-5">
        <v-sheet width="300">
          <v-text-field label="name"></v-text-field>
          <v-text-field label="age"></v-text-field>
          <v-text-field label="location"></v-text-field>
          <v-btn block color="primary">ok</v-btn>
          <UseFocusTrap :options="{ immediate: true }">
            <v-card>
              <h1>asdas</h1>
              <table>
                <thead>
                  <th>asda</th>
                </thead>
                <tbody>
                  <td>sss</td>
                </tbody>
              </table>

              <v-btn block color="error">error</v-btn>
              <v-btn block color="waring">waring</v-btn>
              <v-text-field label="location"></v-text-field>
            </v-card>
          </UseFocusTrap>
        </v-sheet>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { UseFocusTrap } from "@vueuse/integrations/useFocusTrap/component";

const isShow = ref(false);
</script>

<style scoped lang="scss"></style>
