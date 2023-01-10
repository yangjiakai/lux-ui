<template>
  <v-container>
    <v-card height="1000" elevation="6">
      <v-container>
        <v-row>
          <v-col class="mt-2" cols="12">
            <v-card height="300">
              {{ a }}
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>
<script setup>
let a = ref("acaas");
</script>
<style scoped></style>
