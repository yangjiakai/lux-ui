export default [
    {
        path: "/uml/plantuml-sequence",
        name: "uml-plantuml-sequence",
        component: () =>
            import(
                "@/views/uml/PlantumlSequence.vue"
            ),
        meta: {
            requiresAuth: true,
            layout: "ui",
            category: "UML",
            title: "PlantUML Sequence Diagram",
        },
    },
    {
        path: "/uml/plantuml-object",
        name: "uml-plantuml-object",
        component: () =>
            import(
                "@/views/uml/PlantumlObject.vue"
            ),
        meta: {
            requiresAuth: true,
            layout: "ui",
            category: "UML",
            title: "PlantUML Object Diagram",
        },
    },
    {
        path: "/uml/plantuml-timing",
        name: "uml-plantuml-timing",
        component: () =>
            import(
                "@/views/uml/PlantumlTiming.vue"
            ),
        meta: {
            requiresAuth: true,
            layout: "ui",
            category: "UML",
            title: "PlantUML Timing Diagram",
        },
    },
];
