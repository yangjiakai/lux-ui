import plantumlEncoder from "plantuml-encoder";

export const plantuml = (data:string) => {
    return 'http://www.plantuml.com/plantuml/svg/' + plantumlEncoder.encode(data)
}