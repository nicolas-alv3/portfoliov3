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
    AWS = "AWS",
}

export const iconsMapping = {
    [Technologies.JAVA]: "assets/icons/java.svg",
    [Technologies.KOTLIN]: "assets/icons/kotlin.svg",
    [Technologies.REACT]: "assets/icons/react.svg",
    [Technologies.ANGULAR]: "assets/icons/angular.svg",
    [Technologies.NODE]: "assets/icons/node.svg",
    [Technologies.NEXT_JS]: "assets/icons/next.svg",
    [Technologies.NEST_JS]: "assets/icons/nestjs.svg",
    [Technologies.AWS]: "assets/icons/aws.svg",
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

const tiendamia = {
    title: "Tiendamia",
    shortDescription: "Software engineer",
    description: `
    Led the optimization of high-traffic systems to handle significant traffic spikes efficiently.

    - Managed large-scale traffic flows with proactive monitoring and scaling strategies.\n
    - Integrated business metrics tracking and service monitoring to ensure seamless operations and informed decision-making\n
    - Utilized ElasticSearch and RabbitMQ to enhance performance and reliability.\n
    - Leveraged AWS services such as Lambda, S3, EC2, and CloudWatch to build and monitor scalable, cloud-based solutions.`,
    stack: [Technologies.NODE, Technologies.MYSQL, Technologies.NEST_JS, Technologies.AWS],
    img: "data:image/png;base64,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",
    date: "Mar 24"
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
    Migrated frontend from AngularJS to React per Figma UX/UI designs.
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
    link: "https://www.loom.com/embed/0171ca02451246ebbfd6e7c737ed8a0b?sid=ee716f36-7603-4f11-8a38-22434a55c5a5"
}

const losHermanos: Project = {
    title: "LosHermanos",
    shortDescription: "Stock & Sales",
    description: "Within the application, users can add, edit, and delete products. They can also adjust product stock from a dedicated tab and facilitate sales by identifying products through their codes and descriptions. Additionally, there is a product search feature that allows users to find items based on keyword similarity. In response to client requests, a section for price modification, both on a per-product and percentage basis, has been implemented. Currently, I am making minor enhancements to improve the user experience, as the program is used on a daily basis.",
    stack: [Technologies.KOTLIN, Technologies.REACT, Technologies.SPRINGBOOT, Technologies.MYSQL, Technologies.TDD],
    date: "2017",
    img: "https://raw.githubusercontent.com/nicolas-alv3/Corralon-y-ferreteria-los-dos-hermanos/master/frontend/src/icons/logo-horizontal.png",
    link: "https://www.loom.com/embed/47785fd6238048048b6e01c47f9b6022?sid=f3c96aad-2d1f-46c4-a8e7-73f7ce27106d"
}

const distribuidoraJd: Project = {
    title: "DistribJD",
    shortDescription: "Stock & Sales",
    description: "Within the application, users can upload, edit, and delete products, as well as adjust their stock from a dedicated tab. The application allows for sales, with products identified by code and description. Additionally, users can search for products and view sales separately. Upon completing a sale, users can generate a sales receip using a JSReport template. Currently, I am working on developing the Balance and Purchases modules, with the future goal of implementing automatic purchase lists and monthly financial statements.",
    stack: [Technologies.REACT, Technologies.JAVA, Technologies.JS_REPORT, Technologies.MYSQL, Technologies.MATERIALUI, Technologies.SPRINGBOOT, Technologies.TDD],
    date: "2016",
    img: "https://raw.githubusercontent.com/nicolas-alv3/DistribuidoraJDFront/master/src/icons/logo.png",
    link: "https://www.loom.com/embed/2c219fba48354ca493086ec34614f569?sid=15677230-c944-4b80-885b-232aa3d5a798"
}

const glistore: Project = {
    title: "Glistore",
    shortDescription: "Build your own store",
    description: "Glistore is the evolution of Pomelo Bebes project, It is a platform where you can create your own store and customize it 100%. Glistore provides you a brand new store with logo, colors, products, images, categories, all for free!",
    stack: [Technologies.NEXT_JS, Technologies.NODE, Technologies.NEST_JS, Technologies.MONGO, Technologies.SEMANTICUI],
    date: "2016",
    img: "https://glidersoftware.web.app/static/media/gliderlogo.72278e90.png",
    link: "https://www.loom.com/embed/21ab77f477be42cda699e0cbc7bc011a?sid=ebf29d7f-5f7b-4207-8bcd-4a5ee52fb6d8",
    testUrl: "https://glistore.vercel.app"
}

export const projects: Project[] = [glistore, pomeloBebes, losHermanos, distribuidoraJd];

export const jobs: Project[] = [tiendamia, redbee, ensolvers, factorIT]