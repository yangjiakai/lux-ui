<!--
* @Component: Plantuml Object
* @Maintainer: Shawn Qiu
* @Description: PlantUML Object Diagram
-->

<script setup lang="ts">
import { plantuml } from "@/plugins/plantuml";
import FeatureCard from "@/components/FeatureCard.vue";

const umlData = [
  {
    name: "Object Diagram - Basic",
    size: "35vh",
    data: `
left to right direction
' Horizontal lines: -->, <--, <-->
' Vertical lines: ->, <-, <->

map Kick.Off {
}
map task.1 {
    Start => End
}
map task.2 {
    Start => End
}
map task.3 {
    Start => End
}
map task.4 {
    Start => End
}
map task.5 {
    Start => End
}
Kick.Off --> task.1 : Label 1
Kick.Off --> task.2 : Label 2
Kick.Off --> task.3 : Label 3
task.1 --> task.4
task.2 --> task.4
task.3 --> task.4
task.4 --> task.5 : Label 4
`,
  },
  {
    name: "Object Diagram - Deployment",
    size: "20vh",
    data: `
cloud cloud1
cloud cloud2
cloud cloud3
cloud cloud4
cloud cloud5
cloud1 -0- cloud2
cloud1 -0)- cloud3
cloud1 -(0- cloud4
cloud1 -(0)- cloud5

`,
  },
  {
    name: "Object Diagram - Port",
    size: "65vh",
    data: `
[i]
node node {
  portin p1
  portin p2
  portin p3
  portout po1
  portout po2
  portout po3
  file f1
}
[o]

i --> p1
i --> p2
i --> p3
p1 --> f1
p2 --> f1
po1 --> o
po2 --> o
po3 --> o
f1 --> po1
`,
  },

]
</script>

<template>
  <v-container v-for="uml in umlData">
    <FeatureCard :title=uml.name>
      <v-img :src="plantuml(uml.data)" width="100vw" :max-height=uml.size contain attrs="props" />
    </FeatureCard>
  </v-container>
</template>
