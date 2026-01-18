import { rrssIcons, svgList } from "./svg-elements";

export const ImgHeroBG = false;//Fondo en la hero section de imagen
export const ImgTransNavBG = true;
export const ImgTransNavUrl="/images/hero-bg.png";
export const addToCartSystem = false;

export const taxes=10;//%
export const delivery=0;//USD o $

export const heroBG="/images/hero-bg.png";

export const projects=[
    {
        title: "Landing page para auriculares",
        subtitle: "",
        text: `Me desafie a hacer una landing page comun pero convertible y bonita para auriculares `,
        deployState: false,
        techs: ["react", "node", "sass", "express", "tailwind"],
        img: "",
    },
    {
        title: "Portafolio",
        subtitle: "Este mismo",
        text: `Es un proyecto que con la misma plantilla que hice anteriormente, bien modificada, pude hacerla en 3 dias`,
        deployState: true,
        techs: ["react", "next", "sass", "express", "tailwind"],
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
    {href:"#projects", text:"Projects"},
    {href:"#skills", text:"Skills"},
    {href:"#services", text:"Services"},
    {href:"#contact", text:"Contact Me"},
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


export const heroImages=[
    {
        imgUrl: "",
    }
]
