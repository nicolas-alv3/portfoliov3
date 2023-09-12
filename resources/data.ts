export enum Technologies {
    JAVA = "Java",
    KOTLIN = "Kotlin",
    REACT = "React",
    ANGULAR = "Angular",
    NODE = "NodeJS",
    NEST_JS = "NestJS",
    NEXT_JS = "NextJS",
    MONGO = "MongoDB",
    JS_REPORT = "JSreport",
    MYSQL = "Mysql",
    SPRINGBOOT = "Springboot",
    MATERIALUI = "MaterialUI",
    SEMANTICUI = "SemanticUI",
    TDD = "TDD",
}

export const iconsMapping = {
    [Technologies.JAVA]: "assets/icons/java.svg",
    [Technologies.KOTLIN]: "assets/icons/kotlin.svg",
    [Technologies.REACT]: "assets/icons/react.svg",
    [Technologies.ANGULAR]: "assets/icons/angular.svg",
    [Technologies.NODE]: "assets/icons/node.svg",
    [Technologies.NEXT_JS]: "assets/icons/next.svg",
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
    link?: string,
    img: string,
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
    description: "The client approached me with the concept of creating an online catalog, to which I proposed utilizing WhatsApp microservices to complete the sales cycle, with the potential to integrate a payment method in the future. This project provided me with valuable insights into NextJS and allowed me to enhance my proficiency in JavaScript and design.",
    stack: [Technologies.NEXT_JS, Technologies.NODE, Technologies.NEST_JS, Technologies.MONGO],
    date: "Mar 21",
    img: "https://pomelobebes.vercel.app/_next/static/media/logo_pomelo_cuadrado.c8a2d125.png?imwidth=64",
    link: "https://youtu.be/-ZIlGy2ew0g"
}

const losHermanos: Project = {
    title: "LosHermanos",
    shortDescription: "Stock & Sales",
    description: "Within the application, users can add, edit, and delete products. They can also adjust product stock from a dedicated tab and facilitate sales by identifying products through their codes and descriptions. Additionally, there is a product search feature that allows users to find items based on keyword similarity. In response to client requests, a section for price modification, both on a per-product and percentage basis, has been implemented. Currently, I am making minor enhancements to improve the user experience, as the program is used on a daily basis.",
    stack: [Technologies.KOTLIN, Technologies.REACT, Technologies.SPRINGBOOT, Technologies.MYSQL, Technologies.TDD],
    date: "2017",
    img: "https://pomelobebes.vercel.app/_next/static/media/logo_pomelo_cuadrado.c8a2d125.png?imwidth=64",
    link: "https://youtu.be/hij2fPb0EHY"
}

const distribuidoraJd: Project = {
    title: "DistribJD",
    shortDescription: "Stock & Sales",
    description: "Within the application, users can upload, edit, and delete products, as well as adjust their stock from a dedicated tab. The application allows for sales, with products identified by code and description. Additionally, users can search for products and view sales separately. Upon completing a sale, users can generate a sales receip using a JSReport template. Currently, I am working on developing the Balance and Purchases modules, with the future goal of implementing automatic purchase lists and monthly financial statements.",
    stack: [Technologies.REACT, Technologies.JAVA, Technologies.JS_REPORT, Technologies.MYSQL, Technologies.MATERIALUI, Technologies.SPRINGBOOT, Technologies.TDD],
    date: "2016",
    img: "https://raw.githubusercontent.com/nicolas-alv3/DistribuidoraJDFront/master/src/icons/logo.png",
    link: "https://youtu.be/-ZIlGy2ew0g"
}

const glistore: Project = {
    title: "Glistore",
    shortDescription: "Build your own store",
    description: "Within the application, users can upload, edit, and delete products, as well as adjust their stock from a dedicated tab. The application allows for sales, with products identified by code and description. Additionally, users can search for products and view sales separately. Upon completing a sale, users can generate a sales receip using a JSReport template. Currently, I am working on developing the Balance and Purchases modules, with the future goal of implementing automatic purchase lists and monthly financial statements.",
    stack: [Technologies.NEXT_JS, Technologies.NEST_JS, Technologies.MONGO, Technologies.SEMANTICUI],
    date: "2016",
    img: "https://raw.githubusercontent.com/nicolas-alv3/DistribuidoraJDFront/master/src/icons/logo.png",
    link: "https://youtu.be/-ZIlGy2ew0g"
}

export const projects: Project[] = [pomeloBebes, distribuidoraJd, losHermanos];