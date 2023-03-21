export default [
  {
    path: "",
    // redirect: "inbox",
    component: () =>
      import(
        /* webpackChunkName: "apps-email-inbox" */ "@/views/app/email/pages/InboxPage.vue"
      ),
  },
  {
    path: "inbox",
    name: "apps-email-inbox",
    component: () =>
      import(
        /* webpackChunkName: "apps-email-inbox" */ "@/views/app/email/pages/InboxPage.vue"
      ),
  },
  {
    path: "sent",
    name: "apps-email-sent",
    component: () =>
      import(
        /* webpackChunkName: "apps-email-sent" */ "@/views/app/email/pages/SentPage.vue"
      ),
  },
  {
    path: "drafts",
    name: "apps-email-drafts",
    component: () =>
      import(
        /* webpackChunkName: "apps-email-drafts" */ "@/views/app/email/pages/DraftsPage.vue"
      ),
  },
  {
    path: "starred",
    name: "apps-email-starred",
    component: () =>
      import(
        /* webpackChunkName: "apps-email-starred" */ "@/views/app/email/pages/StarredPage.vue"
      ),
  },
  {
    path: "trash",
    name: "apps-email-trash",
    component: () =>
      import(
        /* webpackChunkName: "apps-email-trash" */ "@/views/app/email/pages/TrashPage.vue"
      ),
  },
  {
    path: "inbox/:id",
    name: "apps-email-view",
    component: () =>
      import(
        /* webpackChunkName: "apps-email-view" */ "@/views/app/email/pages/ViewPage.vue"
      ),
  },
];
