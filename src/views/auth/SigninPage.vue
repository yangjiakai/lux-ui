<template>
  <v-card class="pa-3" elevation="3">
    <v-card-title primary-title class="my-4 text-h4"> Welcome </v-card-title>
    <v-card-subtitle>Sign in to your account</v-card-subtitle>
    <!-- sign in form -->

    <v-card-text>
      <v-form class="text-left" v-model="isFormValid" lazy-validation>
        <v-text-field
          v-model="email"
          required
          :validate-on-blur="false"
          :error="error"
          :label="t('$vuetify.login.email')"
          :density="formStyle.density"
          :variant="formStyle.variant"
          :color="formStyle.borderColor"
          :bg-color="formStyle.bgColor"
          name="email"
          outlined
          @keyup.enter="submit"
          @change="resetErrors"
        ></v-text-field>
        <v-text-field
          v-model="password"
          :rules="[rules.required]"
          :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword ? 'text' : 'password'"
          :error="error"
          :error-messages="errorMessages"
          :label="t('$vuetify.login.password')"
          :density="formStyle.density"
          :variant="formStyle.variant"
          :color="formStyle.borderColor"
          :bg-color="formStyle.bgColor"
          name="password"
          outlined
          @change="resetErrors"
          @keyup.enter="submit"
          @click="showPassword = !showPassword"
        ></v-text-field>
        <v-btn
          :loading="isLoading"
          :disabled="isSignInDisabled"
          block
          size="x-large"
          color="primary"
          @click="submit"
          >{{ t("$vuetify.login.button") }}</v-btn
        >

        <div
          class="text-center text-caption font-weight-bold text-uppercase my-5"
        >
          {{ t("$vuetify.login.orsign") }}
        </div>

        <!-- external providers list -->
        <v-btn
          class="mb-2 lighten-2 text-capitalize"
          block
          size="x-large"
          to="/"
        >
          <Icon icon="logos:google-icon" class="mr-3 my-2" />
          Google
        </v-btn>
        <v-btn
          class="mb-2 lighten-2 text-capitalize"
          block
          size="x-large"
          to="/"
        >
          <Icon icon="logos:facebook" class="mr-3" />
          Facebook
        </v-btn>

        <div v-if="errorProvider" class="error--text my-2">
          {{ errorProviderMessages }}
        </div>

        <div class="mt-5 text-center">
          <router-link class="text-primary" to="/auth/forgot-password">
            {{ t("$vuetify.login.forgot") }}
          </router-link>
        </div>
      </v-form></v-card-text
    >
  </v-card>
  <div class="text-center mt-6">
    {{ t("$vuetify.login.noaccount") }}
    <router-link to="/auth/signup" class="text-primary font-weight-bold">
      {{ t("$vuetify.login.create") }}
    </router-link>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import { useLocale } from "vuetify";
import { Icon } from "@iconify/vue";
const { t } = useLocale();

// sign in buttons
const isLoading = ref(false);
const isSignInDisabled = ref(false);

const isFormValid = ref(true);
const email = ref("");
const password = ref("");

const error = ref(false);
const errorMessages = ref("");

const errorProvider = ref(false);
const errorProviderMessages = ref("");

// show password field
const showPassword = ref(false);

const providers = ref([
  {
    id: "google",
    label: "Google",
    isLoading: false,
  },
  {
    id: "facebook",
    label: "Facebook",
    isLoading: false,
  },
]);

const formStyle = reactive({
  labelColor: "3B64A0",
  mainColor: "#3F69F4",
  borderColor: "#42a5f5",
  bgColor: "#fff",
  density: "default", //	'default' | 'comfortable' | 'compact'
  variant: "underlined", // 'flat' | 'elevated' | 'tonal' | 'outlined' | 'text' | 'plain'
});

const rules = reactive({
  required: (value) => (value && Boolean(value)) || "Required",
});

const submit = () => {};

const signIn = (email, password) => {
  this.$router.push("/");
};

const signInProvider = (provider) => {};

const resetErrors = () => {};
</script>
