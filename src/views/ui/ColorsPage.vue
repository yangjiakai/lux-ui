<template>
  <v-container>
    <v-row>
      <v-col class="mt-2" cols="12">
        <v-card>
          <h1>ColorPage</h1>
          <!-- <h2>{{ $vuetify.locale.t("common.title") }}</h2> -->
          {{ t("$vuetify.common.title") }}
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useLocale } from "vuetify";
const { current, t } = useLocale();
onMounted(() => {
  console.log(current);
});

const changeLocale = (locale) => {
  current.value = locale;
};
</script>
