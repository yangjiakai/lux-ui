<!--
* @Component:
* @Maintainer: J.K. Yang
* @Description:
-->
<script setup lang="ts">
const pricing_plans = [
  {
    plan_name: "基本版",
    price: "免费",
    storage: "15GB",
    features: ["免费15GB云存储", "文档、表格和幻灯片编辑工具", "智能应用推荐"],
  },
  // {
  //   plan_name: "高级版",
  //   price: "每月29元",
  //   storage: "100GB",
  //   features: ["100GB云存储", "专属客户支持", "高级安全功能", "高速文件传输"],
  // },
  {
    plan_name: "专业版",
    price: "每月59元",
    storage: "200GB",
    features: [
      "200GB云存储",
      "实时客户支持",
      "企业级安全功能",
      "无限制文件传输速度",
      "智能文件组织和搜索",
    ],
  },
  {
    plan_name: "企业版",
    price: "每月99元",
    storage: "2TB",
    features: [
      "2TB云存储",
      "专属客户经理",
      "企业级安全和合规性",
      "高速文件传输和无限制速度",
      "定制解决方案和集成",
    ],
  },
];

const pricing_plans2 = [
  {
    type: "COMMUNITY",
    price: "Free, forever",
    features: [
      "Open-Source under MIT License",
      "RBAC (Coming soon)",
      "REST & GraphQL API",
      "Powerful Content Management",
      "Infinite Customization Capabilities",
      "Unlimited Usage (Entries, API calls, etc.)",
      "Community Support",
    ],
    color: "#13BB70",
    colorClass: "community-color",
  },
  {
    type: "PRO",
    price: "$99",
    features: [
      "Everything in Community",
      "10 seats",
      "100,000 CMS Entries",
      "Built-in Email provider",
      "Global CDN",
      "Real-time logs",
      "Email / In App Notifications",
    ],
    color: "#4945ff",
    colorClass: "pro-color",
  },
  {
    type: "TEAM",
    price: "$499",
    features: [
      "Everything in Pro, plus...",
      "20 seats",
      "1,000,000 CMS Entries",
      "Higher storage & bandwidth limits",
      "Audit logs (7 days)",
      "Review workflows (Coming soon)",
      "Email / In App Notifications",
    ],
    color: "#AC56F5",
    colorClass: "team-color",
  },
];
</script>

<template>
  <v-toolbar color="#F9FAFB" height="60">
    <v-toolbar-title class="text-h6 font-weight-bold">
      <span>Pricing2</span>
    </v-toolbar-title>
  </v-toolbar>
  <v-sheet elevation="0" class="mx-auto landing-warpper text-left" rounded>
    <v-sheet
      elevation="0"
      color="transparent"
      max-width="1600 "
      class="mx-auto my-10 pa-10"
    >
      <v-item-group mandatory selected-class="active-card">
        <v-row align="stretch">
          <v-col cols="12" md="4" v-for="plan in pricing_plans2">
            <v-item v-slot="{ isSelected, selectedClass, toggle }">
              <v-card
                elevation="0"
                height="100%"
                class="base-card mx-auto pa-5 d-flex flex-column justify-center"
                :class="selectedClass"
                @click="toggle"
                color="#F6FAFE"
              >
                <div>
                  <h3
                    class="font-weight-bold text-h6 mb-5 text-center"
                    :class="plan.colorClass"
                  >
                    {{ plan.type }}
                  </h3>
                  <v-card elevation="0" class="text-center">
                    <h1 class="font-weight-black text-h4 my-10 text-color">
                      <span>{{ plan.price }}</span>
                    </h1>
                    <p class="font-weight-bold">
                      {{ plan.price }}/month/project
                    </p>
                    <p class="px-5 pt-5">
                      <v-btn
                        size="x-large"
                        class="text-white my-5"
                        block
                        :color="plan.color"
                        >Subscribe</v-btn
                      >
                    </p>
                  </v-card>
                  <div class="px-5 py-10">
                    <h3 :class="plan.colorClass" class="mb-5">
                      {{ plan.type }}
                    </h3>
                    <div>
                      <div
                        class="text-color text-body-2 font-weight-medium mb-3"
                        v-for="feature in plan.features"
                      >
                        <v-btn size="20" icon class="mr-2">
                          <v-icon size="14" :color="plan.color"
                            >mdi-check</v-icon
                          ></v-btn
                        >

                        {{ feature }}
                      </div>
                    </div>
                  </div>
                </div>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-item-group>
    </v-sheet>
  </v-sheet>
</template>

<style scoped lang="scss">
.base-card {
  transition: 0.3s ease-out;
  border: 1px solid #eaf2fa;
}

.active-card {
  border: 1px solid #e5e5e5;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
  transform: scale(1.05);
  transition: 0.3s ease-out;
}

.text-color {
  color: #1d1b84;
}

.pro-color {
  color: #4945ff;
}

.team-color {
  color: #ac56f5;
}

.community-color {
  color: #13bb70;
}
</style>
