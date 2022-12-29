export default [
  {
    icon: "mdi-file-lock-outline",
    key: "menu.auth",
    text: "Auth Pages",
    regex: /^\/auth/,
    items: [
      {
        icon: "mdi-login",
        key: "menu.authLogin",
        text: "Signin / Login",
        link: "/auth/signin",
      },
      {
        icon: "mdi-logout",
        key: "menu.authRegister",
        text: "Signup / Register",
        link: "/auth/signup",
      },
      {
        icon: "mdi-email-check",
        key: "menu.authVerify",
        text: "Signup / AuthVerify",
        link: "/auth/verify-email",
      },
    ],
  },
  {
    icon: "mdi-file-cancel-outline",
    key: "menu.errorPages",
    text: "Error Pages",
    regex: /^\/error/,
    items: [
      {
        icon: "mdi-file-outline",
        key: "menu.errorNotFound",
        text: "Not Found / 404",
        link: "/error/not-found",
      },
      {
        icon: "mdi-file-outline",
        key: "menu.errorUnexpected",
        text: "Unexpected / 500",
        link: "/error/unexpected",
      },
    ],
  },
];
