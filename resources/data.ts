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
    SQLSERVER = "SQLServer",
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
    [Technologies.SQLSERVER]: "",
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
    testUrl?: string,
}

const redbee = {
    title: "Redbee",
    shortDescription: "Fullstack developer",
    description: `
    Led the transition from suboptimal practices to efficient development processes.\n
    - Collaboratively developed fullstack solutions using Java and Angular.\n
    - Fostered client engagement, ensuring the delivery of tailored solutions.\n
    - Implemented industry best practices, enhancing code quality and project success`,
    stack: [Technologies.JAVA, Technologies.ANGULAR, Technologies.SQLSERVER, Technologies.SPRINGBOOT],
    img: "https://vfcomunicaciones.cl/wp-content/uploads/2019/04/redbee.jpg",
    date: "Jun 22"
}

const factorIT = {
    title: "FactorIT",
    shortDescription: "Fullstack developer",
    description: `
    Developed REST web services in Java with Spring for Angular frontend.
    - Worked on projects for BBVA Francés insurance.`,
    stack: [Technologies.JAVA, Technologies.ANGULAR, Technologies.MYSQL, Technologies.SPRINGBOOT],
    img: "https://ii.ct-stc.com/5/logos/empresas/2019/07/05/f977bb3068314eeea5bf170321314thumbnail.png",
    date: "Mar 21"
}

const ensolvers = {
    title: "Ensolvers",
    shortDescription: "Fullstack developer",
    description: `
    Migrated frontend from AngularJS to React per Figma UX-UI designs.
    - Provided live support for bug resolution and customer inquiries.
    - Contributed to backend development using Java and Spring Boot.`,
    stack: [Technologies.JAVA, Technologies.REACT, Technologies.MYSQL, Technologies.SPRINGBOOT],
    img: "https://uploads-ssl.webflow.com/646e6334b8ff4a650ca8ed68/647646c3d875dac6c8486195_Logo_Ensolvers_260px_footer_b_sin_frase_b.png",
    date: "Jul 21"
}

const pomeloBebes: Project = {
    title: "Pomelo Bebes",
    shortDescription: "Clothes store",
    description: "The client approached me with the concept of creating an online catalog, to which I proposed utilizing WhatsApp microservices to complete the sales cycle, with the potential to integrate a payment method in the future. This project provided me with valuable insights into NextJS and allowed me to enhance my proficiency in JavaScript and design.",
    stack: [Technologies.NEXT_JS, Technologies.NODE, Technologies.NEST_JS, Technologies.MONGO],
    date: "Mar 21",
    img: "https://pomelobebes.vercel.app/_next/static/media/logo_pomelo_cuadrado.c8a2d125.png?imwidth=64",
    link: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6969355242471600128?compact=1"
}

const losHermanos: Project = {
    title: "LosHermanos",
    shortDescription: "Stock & Sales",
    description: "Within the application, users can add, edit, and delete products. They can also adjust product stock from a dedicated tab and facilitate sales by identifying products through their codes and descriptions. Additionally, there is a product search feature that allows users to find items based on keyword similarity. In response to client requests, a section for price modification, both on a per-product and percentage basis, has been implemented. Currently, I am making minor enhancements to improve the user experience, as the program is used on a daily basis.",
    stack: [Technologies.KOTLIN, Technologies.REACT, Technologies.SPRINGBOOT, Technologies.MYSQL, Technologies.TDD],
    date: "2017",
    img: "https://raw.githubusercontent.com/nicolas-alv3/Corralon-y-ferreteria-los-dos-hermanos/master/frontend/src/icons/logo-horizontal.png",
    link: "https://www.youtube.com/embed/-ZIlGy2ew0g?si=bDHBpNicPYAaQS6Y"
}

const distribuidoraJd: Project = {
    title: "DistribJD",
    shortDescription: "Stock & Sales",
    description: "Within the application, users can upload, edit, and delete products, as well as adjust their stock from a dedicated tab. The application allows for sales, with products identified by code and description. Additionally, users can search for products and view sales separately. Upon completing a sale, users can generate a sales receip using a JSReport template. Currently, I am working on developing the Balance and Purchases modules, with the future goal of implementing automatic purchase lists and monthly financial statements.",
    stack: [Technologies.REACT, Technologies.JAVA, Technologies.JS_REPORT, Technologies.MYSQL, Technologies.MATERIALUI, Technologies.SPRINGBOOT, Technologies.TDD],
    date: "2016",
    img: "https://raw.githubusercontent.com/nicolas-alv3/DistribuidoraJDFront/master/src/icons/logo.png",
    link: "https://www.youtube.com/embed/-ZIlGy2ew0g?si=bDHBpNicPYAaQS6Y"
}

const glistore: Project = {
    title: "Glistore",
    shortDescription: "Build your own store",
    description: "Glistore is the evolution of Pomelo Bebes project, It is a platform where you can create your own store and customize it 100%. Glistore provides you a brand new store with logo, colors, products, images, categories, all for free!",
    stack: [Technologies.NEXT_JS, Technologies.NODE, Technologies.NEST_JS, Technologies.MONGO, Technologies.SEMANTICUI],
    date: "2016",
    img: "https://glidersoftware.web.app/static/media/gliderlogo.72278e90.png",
    link: "https://www.youtube.com/embed/-ZIlGy2ew0g?si=bDHBpNicPYAaQS6Y",
    testUrl: "https://glistore.vercel.app"
}

export const projects: Project[] = [glistore, pomeloBebes, losHermanos, distribuidoraJd];

export const jobs: Project[] = [redbee, ensolvers, factorIT]