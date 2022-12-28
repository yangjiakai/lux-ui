<template>
  <v-container>
    <v-card height="1000" elevation="6">
      <v-container>
        <v-row>
          <v-col class="mt-2" cols="12">
            <v-card
              color="primary"
              height="300"
              class="d-flex align-center justify-center"
            >
              <Loading />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>
<script setup>
import Loading from "@/components/loading/Loading01";
</script>
<style scoped></style>
