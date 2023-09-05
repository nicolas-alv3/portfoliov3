export enum Technologies {
    JAVA = "Java",
    REACT = "React",
    ANGULAR = "Angular",
    NODE = "NodeJS",
    NEST_JS = "NestJS",
    MONGO = "MongoDB",
    JS_REPORT = "JSreport",
    MYSQL = "Mysql",
    SPRINGBOOT = "Springboot",
    MATERIALUI = "MaterialUi",
    TDD = "TDD",
}

export const iconsMapping = {
    [Technologies.JAVA]: "assets/icons/java.svg",
    [Technologies.REACT]: "assets/icons/react.svg",
    [Technologies.ANGULAR]: "assets/icons/angular.svg",
    [Technologies.NODE]: "assets/icons/node.svg",
    [Technologies.NEST_JS]: "",
    [Technologies.MONGO]: "",
    [Technologies.JS_REPORT]: "",
    [Technologies.MYSQL]: "",
    [Technologies.SPRINGBOOT]: "",
    [Technologies.MATERIALUI]: "",
    [Technologies.TDD]: "",
}

export interface Project {
    title: string,
    description: string,
    shortDescription: string,
    date: string,
    stack: Technologies[],
}

const redbee = {
    title: "Redbee",
    shortDescription: "Short des",
    description: "",
    stack: [],
    date: "Mar 21"
}

const pomeloBebes: Project = {
    title: "Pomelo Bebes",
    shortDescription: "Clothes store",
    description: "The client approached me with the concept of creating an online catalog, to which I proposed utilizing WhatsApp microservices to complete the sales cycle, with the potential to integrate a payment method in the future. This project provided me with valuable insights into Angular and allowed me to enhance my proficiency in JavaScript and design.",
    stack: [Technologies.ANGULAR, Technologies.NODE, Technologies.NEST_JS, Technologies.MONGO],
    date: "Mar 21"
}

const distribuidoraJd: Project = {
    title: "DistribJD",
    shortDescription: "Stock & Sales",
    description: "Within the application, users can upload, edit, and delete products, as well as adjust their stock from a dedicated tab. The application allows for sales, with products identified by code and description. Additionally, users can search for products and view sales separately. Upon completing a sale, users can generate a sales receip using a JSReport template. Currently, I am working on developing the Balance and Purchases modules, with the future goal of implementing automatic purchase lists and monthly financial statements.",
    stack: [Technologies.REACT, Technologies.JAVA, Technologies.JS_REPORT, Technologies.MYSQL, Technologies.MATERIALUI, Technologies.SPRINGBOOT, Technologies.TDD],
    date: "Mar 21"
}

export const projects: Project[] = [pomeloBebes, distribuidoraJd];