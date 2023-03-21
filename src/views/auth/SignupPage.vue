<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { useRouter } from "vue-router";
const router = useRouter();

//
const refLoginForm = ref(null);
const refUsername = ref(null);
const refEmail = ref(null);
const refPassword = ref(null);

// sign in buttons
const isLoading = ref(false);
const isSignInDisabled = ref(false);

const emailRules = ref([
  (v) => !!v || "E-mail is required",
  (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
]);

const usernameRules = ref([
  (v) => !!v || "Password is required",
  (v) => (v && v.length <= 10) || "Password must be less than 10 characters",
]);

const passwordRules = ref([
  (v) => !!v || "Password is required",
  (v) => (v && v.length <= 10) || "Password must be less than 10 characters",
]);

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

const validate = async () => {
  const { valid } = await refLoginForm.value.validate();
  console.log(valid);
  return valid;
};

const submit = async () => {
  const { valid } = await refLoginForm.value.validate();
  if (valid) {
    isLoading.value = true;
    isSignInDisabled.value = true;
    signIn(email.value, password.value);
  } else {
    console.log("no");
  }
};

const signIn = (email, password) => {
  // TODO API CALL
  setTimeout(() => {
    router.push({
      name: "home",
    });
  }, 2000);
};

const signInProvider = (provider) => {};

const resetErrors = () => {
  error.value = false;
  errorMessages.value = "";
};
</script>
<template>
  <v-card class="pa-3" elevation="3">
    <v-card-title primary-title class="my-4 text-h4">
      {{ $t("register.title") }}
    </v-card-title>
    <v-card-subtitle>Let's build amazing products</v-card-subtitle>
    <!-- sign in form -->

    <v-card-text>
      <v-form
        ref="refLoginForm"
        class="text-left"
        v-model="isFormValid"
        lazy-validation
      >
        <v-text-field
          ref="refUsername"
          v-model="username"
          required
          :error="error"
          :label="$t('register.name')"
          :density="formStyle.density"
          :variant="formStyle.variant"
          :color="formStyle.borderColor"
          :bg-color="formStyle.bgColor"
          :rules="usernameRules"
          name="username"
          outlined
          validateOn="blur"
          @keyup.enter="submit"
          @change="resetErrors"
        ></v-text-field>
        <v-text-field
          ref="refEmail"
          v-model="email"
          required
          :error="error"
          :label="$t('register.email')"
          :density="formStyle.density"
          :variant="formStyle.variant"
          :color="formStyle.borderColor"
          :bg-color="formStyle.bgColor"
          :rules="emailRules"
          name="email"
          outlined
          validateOn="blur"
          @keyup.enter="submit"
          @change="resetErrors"
        ></v-text-field>
        <v-text-field
          ref="refPassword"
          v-model="password"
          :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword ? 'text' : 'password'"
          :error="error"
          :error-messages="errorMessages"
          :label="$t('register.password')"
          :density="formStyle.density"
          :variant="formStyle.variant"
          :color="formStyle.borderColor"
          :bg-color="formStyle.bgColor"
          :rules="passwordRules"
          name="password"
          outlined
          validateOn="blur"
          @change="resetErrors"
          @keyup.enter="submit"
          @click:append-inner="showPassword = !showPassword"
        ></v-text-field>
        <v-btn
          :loading="isLoading"
          :disabled="isSignInDisabled"
          block
          size="x-large"
          color="primary"
          @click="submit"
          class="mt-2"
          >{{ $t("register.button") }}</v-btn
        >

        <div
          class="text-grey text-center text-caption font-weight-bold text-uppercase my-5"
        >
          {{ $t("register.orsign") }}
        </div>

        <!-- external providers list -->
        <v-btn
          class="mb-2 lighten-2 text-capitalize"
          block
          size="x-large"
          to="/"
          :disabled="isSignInDisabled"
        >
          <Icon icon="logos:google-icon" class="mr-3 my-2" />
          Google
        </v-btn>
        <v-btn
          class="mb-2 lighten-2 text-capitalize"
          block
          size="x-large"
          to="/"
          :disabled="isSignInDisabled"
        >
          <Icon icon="logos:facebook" class="mr-3" />
          Facebook
        </v-btn>

        <div v-if="errorProvider" class="error--text my-5">
          {{ errorProviderMessages }}
        </div>

        <div class="my-5 text-center">
          {{ $t("register.agree") }}
          <br />
          <router-link class="text-primary" to="">{{
            $t("common.tos")
          }}</router-link>
          &
          <router-link class="text-primary" to="">{{
            $t("common.policy")
          }}</router-link>
        </div>
      </v-form></v-card-text
    >
  </v-card>
  <div class="text-center mt-6">
    {{ $t("register.account") }}
    <router-link to="/auth/signin" class="text-primary font-weight-bold">
      {{ $t("register.signin") }}
    </router-link>
  </div>
</template>
