import { svgList } from "./svg-elements";

export const ImgHeroBG = false;//Fondo en la hero section de imagen
export const ImgTransNavBG = true;
export const ImgTransNavUrl="";
export const addToCartSystem = false;

export const taxes=10;//%
export const delivery=0;//USD o $

export const heroBG="";

export const projects=[
    {
        title: "Project title 1",
        subtitle: "Project subtitle 1",
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the `,
        deployState: false,
        techs: ["react", "node", "sass", "express", "tailwind"],
        img:"",
    },
    {
        title: "Landing page para auriculares",
        subtitle: "",
        text: `Me desafie a hacer una landing page comun pero convertible y bonita para auriculares `,
        deployState: false,
        techs: ["react", "node", "sass", "express", "tailwind"],
        img: "",
    },
    {
        title: "Project title 3",
        subtitle: "Project subtitle 3",
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text e`,
        deployState: true,
        techs: ["react", "node", "sass", "express", "tailwind"],
        img: "",
    }
]

export const infoHero=[
    {
        principalTitle: "Full stack web developer",
        subTitle: "specialized in React technologies",
        ctaContract: "Contract me",
        ctaProjects: "View projects",
    }
]

export const navLinks=[
    {href:"/", text:"Start"},
    {href:"#features", text:"Projects"},
    {href:"#testimonials", text:"Testimonials"},
]

export const titlesObj={
    logoTitle: "O-LvL",
    benefits: "Benefits of our headphones",
    testimonials: "Testimonials",
}

export const featuresList=[
    {
        title: "Water prof",
        description: "Water-resistant design for worry-free listening in any environment.",
        imgUrl: "/images/features/water-prof.png"
    },

    {
        title: "Noise canceling",
        description: "Zero external noise distractions, Just you and your music",
        imgUrl: "/images/features/noise-canceling.png"
    },

    {
        title: "Durable materials",
        description: "Built with durable, tough materials for long-lasting performance.",
        imgUrl: "/images/long-time.png"
    },
];

export const testimonialsList = [
    {  
        nameTest: "John Carter",
        text: "Amazing noise cancellation and incredible durability. Perfect for work and travel!", 
        stars: 5, 
        id: 0,
        prfImg: "/images/testimonials/default-testimonial.jpg",
    },
    {
        nameTest: "Emily Johnson",
        text: "Great sound quality and waterproof design. I use them at the gym every day.", 
        stars: 4, 
        id: 1,
        prfImg: "/images/testimonials/default-testimonial.jpg",
    },
    {
        nameTest: "Michael Brown",
        text: "These headphones are a game-changer. Noise cancellation is top-notch!", 
        stars: 5, 
        id: 2,
        prfImg: "/images/testimonials/default-testimonial.jpg",
    },
    {
        nameTest: "Sophia Williams",
        text: "Perfect for outdoor use. Waterproof and comfortable for long hours.", 
        stars: 4, 
        id: 3,
        prfImg: "/images/testimonials/default-testimonial.jpg",
    },
    {
        nameTest: "David Wilson",
        text: "Super durable and the sound quality is crystal clear. Highly recommend!", 
        stars: 5,
        id: 4,
        prfImg: "/images/testimonials/default-testimonial.jpg",
    },
    {
        nameTest: "Olivia Martinez",
        text: "Waterproof design and excellent durability make these headphones unbeatable.", 
        stars: 4,
        id: 5,
        prfImg: "/images/testimonials/default-testimonial.jpg",
    },
];



export const skillsList = [
    {
        catName: "Front-End",
        catIcon: "",
        catId: "f-e",
        catSkills: [
            {
                skillName: "React.js",
                skillId: "react",
                SkillIcon: svgList.react,
            },
            {
                skillName: "Next.js",
                skillId: "next",
                SkillIcon: svgList.next,
            },
            {
                skillName: "Tailwind CSS",
                skillId: "tailwind",
                SkillIcon: svgList.tailwind,
            },
            {
                skillName: "Sass",
                skillId: "sass",
                SkillIcon: svgList.sass,
            }
        ],
    },
    {
        catName: "Back-End",
        catIcon: "",
        catId: "b-e",
        catSkills: [
            {
                skillName: "Node.js",
                skillId: "node",
                SkillIcon: svgList.node,
            },
            {
                skillName: "Express.js",
                skillId: "express",
                SkillIcon: svgList.express,
            },
            {
                skillName: "Sequelize",
                skillId: "sequelize",
                SkillIcon: svgList.sequelize,
            }
        ],
    },
    {
        catName: "Databases",
        catId: "db",
        catIcon: "",
        catSkills: [
            {
                skillName: "MySQL",
                skillId: "mysql",
                SkillIcon: svgList.mysql,
            },
            {
                skillName: "phpMyAdmin",
                skillId: "phpmyadmin",
                SkillIcon: svgList.phpmyadmin,
            },
        ],
    },
]

export const footerLinksSections=[
    {
        title: "Navegacion",
        links: [
            {
                txt: "Inicio",
                href: "",
            },
            {
                txt: "Compra ahora",
                href: "",
            },
            {
                txt: "Caracteristicas",
                href: "",
            },
            {
                txt: "Testimonios",
                href: "",
            },
            {
                txt: "FAQ",
                href: "",
            },
        ]
    },
    {
        title: "Otras paginas",
        links: [
            {
                txt: "StreetWearer",
                href:"",
            },
            {
                txt: "E-commerce templates",
                href:"",
            },
            {
                txt: "SmirXFolio",
                href:"",
            },
        ]
    },
    {
        title: "Contacto",
        links: [
            {
                txt: "Sugerencias y dudas",
                href:"",
            },
            {
                txt: "Inversores",
                href:"",
            },
            {
                txt: "Errores",
                href:"",
            },
        ]
    }
]

export const footerRRSS=[
    {
        icon: "",
        alt: "IG",
        href: "",
    },
    {
        icon: "",
        alt: "FB",
        href: "",
    },
    {
        icon: "",
        alt: "TW",
        href: "",
    },
    {
        icon: "",
        alt: "YT",
        href: "",
    },
]

export const heroImages=[
    {
        imgUrl: "",
    }
]
