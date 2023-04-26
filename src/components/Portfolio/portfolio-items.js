const bbDemo = "https://firebasestorage.googleapis.com/v0/b/portfolio-cd2d0.appspot.com/o/bb-demo.mp4?alt=media&token=84ed2414-4265-4110-a1b1-ee36be260016";
const crDemo = "https://firebasestorage.googleapis.com/v0/b/portfolio-cd2d0.appspot.com/o/cr-demo.mp4?alt=media&token=8ab94c07-7b2d-45c7-836d-b019db03c80e";

const languages = {
  budgetBreakdown: ["React", "Redux", "CSS", "Firebase"],
  bucketlist: ["React", "JavaScript", "CSS"],
  socialMediaApp: ["React", "Redux", "Firebase"],
  crSite: ["HTML", "CSS", "JavaScript"],
};

const { budgetBreakdown, bucketlist, socialMediaApp, crSite } = languages;

const portfolioItems = [
  {
    id: "P1",
    video: {src: bbDemo, type: "video/mp4"},
    title: "Budget Breakdown",
    description: "Money management tool to help keep track of your expenses.",
    languages: budgetBreakdown,
    link: "https://nikkipinzon.com/budget-breakdown/",
    target: "_blank",
  },
  {
    id: "P2",
    video: {src: bbDemo, type: "video/mp4"},
    title: "Bucketlist",
    description: "List of goals you want to achieve within your lifetime.",
    languages: bucketlist,
    link: "#",
    target: "",
  },
  {
    id: "P3",
    video: {src: crDemo, type: "video/mp4"},
    title: "Canaan Recycling Website",
    description:
      "Company website for Canaan Recycling, a fully diversified, domestic recycling firm.",
    languages: crSite,
    link: "https://canaanrecycling.com/",
    target: "_blank",
  },
  {
    id: "P4",
    video: {src: bbDemo, type: "video/mp4"},
    title: "Twitter Clone",
    description:
      "Will be a simple social media app that allows users to follow, post, like, comment, and direct message.",
    languages: socialMediaApp,
    link: "#",
    target: "_blank",
  },
];

export default portfolioItems;
