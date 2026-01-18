import { svgList } from "@/svg-elements";

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
                skillName: "TypeScript",
                skillId: "typescript",
                SkillIcon: svgList.typescript,
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
    {
        catName: "Automatizations",
        catId: "auto",
        catIcon: "",
        catSkills: [
            {
                skillName: "Python",
                skillId: "python",
                SkillIcon: svgList.python,
            },
            {
                skillName: "PaddleOCR",
                skillId: "paddleocr",
                SkillIcon: svgList.paddleocr,
            },
            {
                skillName: "NLP.js",
                skillId: "nlpjs",
                SkillIcon: svgList.nlpjs,
            },
            {
                skillName: "Puppeteer",
                skillId: "puppeteer",
                SkillIcon: svgList.puppeteer,
            },
        ],
    },
]