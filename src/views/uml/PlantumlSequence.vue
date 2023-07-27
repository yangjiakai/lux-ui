<!--
* @Component: Plantuml Sequence
* @Maintainer: Shawn Qiu
* @Description: PlantUML Sequence Diagram
-->

<script setup lang="ts">
import { plantuml } from "@/plugins/plantuml";
import FeatureCard from "@/components/FeatureCard.vue";

const umlData = [
  {
    name: "Sequence Diagram - Basic",
    size: "25vh",
    data: `
Alice -> Bob: Authentication Request
Bob --> Alice: Authentication Response

Alice -> Bob: Another authentication Request
Alice <-- Bob: Another authentication Response
`,
  },
  {
    name: "Sequence Diagram - Activation",
    size: "45vh",
    data: `
alice -> bob ++ : hello
bob -> bob ++ : self call
bob -> bib ++  #005500 : hello
bob -> george ** : create
return done
return rc
bob -> george !! : delete
return success
`,
  },
  {
    name: "Sequence Diagram - Colorful, Twisted",
    size: "40vh",
    data: `
skinparam handwritten true

skinparam sequence {
ArrowColor DeepSkyBlue
ActorBorderColor DeepSkyBlue
LifeLineBorderColor blue
LifeLineBackgroundColor #A9DCDF

ParticipantBorderColor DeepSkyBlue
ParticipantBackgroundColor DodgerBlue
ParticipantFontName Impact
ParticipantFontSize 17
ParticipantFontColor #A9DCDF

ActorBackgroundColor aqua
ActorFontColor DeepSkyBlue
ActorFontSize 17
ActorFontName Aapex
}

actor User
participant "First Class" as A
participant "Second Class" as B
participant "Last Class" as C

User -> A: DoWork
activate A

A -> B: Create Request
activate B

B -> C: DoWork
activate C
C --> B: WorkDone
destroy C

B --> A: Request Created
deactivate B

A --> User: Done
deactivate A

`,
  },
  {
    name: "Sequence Diagram - Complex",
    size: "50vh",
    data: `

participant Participant as Foo
actor       Actor       as Foo1
boundary    Boundary    as Foo2
control     Control     as Foo3
entity      Entity      as Foo4
database    Database    as Foo5
collections Collections as Foo6
queue       Queue       as Foo7
Foo -> Foo1 : To actor 
Foo -> Foo2 : To boundary
Foo -> Foo3 : To control
group My own label [My own label 2]
Foo -> Foo4 : To entity
Foo -> Foo5 : To database
end
Foo -> Foo6 : To collections
Foo -> Foo7: To queue

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
