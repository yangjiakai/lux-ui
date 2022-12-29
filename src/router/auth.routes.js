export default [
  {
    path: "/auth/signin",
    name: "auth-signin",
    component: () =>
      import(
        /* webpackChunkName: "auth-signin" */ "@/views/auth/SigninPage.vue"
      ),
    meta: {
      layout: "auth",
      title: "SignIn",
    },
  },
  {
    path: "/auth/signup",
    name: "auth-signup",
    component: () =>
      import(
        /* webpackChunkName: "auth-signup" */ "@/views/auth/SignupPage.vue"
      ),
    meta: {
      layout: "auth",
      title: "SignUp",
    },
  },
  {
    path: "/auth/verify-email",
    name: "verify-email",
    component: () =>
      import(
        /* webpackChunkName: "verify-email" */ "@/views/auth/VerifyEmailPage.vue"
      ),
    meta: {
      layout: "auth",
      title: "VerifyEmail",
    },
  },
];
