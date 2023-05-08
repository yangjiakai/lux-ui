// users Data Page
export default [
  {
    path: "/data/users-data",
    component: () => import("@/views/datatable/UsersDataPage.vue"),
    meta: {
      requiresAuth: true,
      layout: "ui",
      category: "Data",
      title: "UsersDataTable",
    },
  },
  // photos Data Page
  {
    path: "/data/photos-data",
    component: () => import("@/views/datatable/PhotosDataPage.vue"),
    meta: {
      requiresAuth: true,
      layout: "ui",
      category: "Data",
      title: "PhotosDataTable",
    },
  },
  // collections Data Page
  {
    path: "/data/collections-data",
    component: () => import("@/views/datatable/CollectionsDataPage.vue"),
    meta: {
      requiresAuth: true,
      layout: "ui",
      category: "Data",
      title: "CollectionsDataTable",
    },
  },
  // topics Data Page
  {
    path: "/data/topics-data",
    component: () => import("@/views/datatable/TopicsDataPage.vue"),
    meta: {
      requiresAuth: true,
      layout: "ui",
      category: "Data",
      title: "TopicsDataTable",
    },
  },
  // topic Photos Data Page
  {
    path: "/data/topic-photos-data",
    component: () => import("@/views/datatable/TopicPhotosDataPage.vue"),
    meta: {
      requiresAuth: true,
      layout: "ui",
      category: "Data",
      title: "TopicPhotosDataTable",
    },
  },
  // file upload preview
  {
    path: "/data/file-upload-preview",
    component: () => import("@/views/datatable/FileUploadPreviewPage.vue"),
    meta: {
      requiresAuth: true,
      layout: "ui",
      category: "Data",
      title: "FileUploadPreview",
    },
  },
  // dynamic form render
  {
    path: "/data/dynamic-form-render",
    component: () => import("@/views/datatable/DynamicFormRenderPage.vue"),
    meta: {
      requiresAuth: true,
      layout: "ui",
      category: "Data",
      title: "DynamicFormRender",
    },
  },
  // custom form generation
  {
    path: "/data/custom-form-generation",
    component: () => import("@/views/datatable/CustomFormGenerationPage.vue"),
    meta: {
      requiresAuth: true,
      layout: "ui",
      category: "Data",
      title: "CustomFormGeneration",
    },
  },
  // rich text editor
  {
    path: "/data/rich-text-editor",
    component: () => import("@/views/datatable/editor/RichTextEditorPage.vue"),
    meta: {
      requiresAuth: true,
      layout: "landing",
      category: "Data",
      title: "RichTextEditor",
    },
  },
  // edit table
  {
    path: "/data/edit-table",
    component: () => import("@/views/datatable/EditTablePage.vue"),
    meta: {
      requiresAuth: true,
      layout: "ui",
      category: "Data",
      title: "EditTable",
    },
  },
];
